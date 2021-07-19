/* 채팅방 파일 첨부 */
	@RequestMapping(value = "chat_File_Upload.json")
	public @ResponseBody JsonResultEntity chatFileUpload(HttpSession session, MultipartHttpServletRequest mReq,
			HttpServletRequest req) {
		MessengerDAO dao = sqlSession.getMapper(MessengerDAO.class);
		Map<String, Object> fileData = new HashMap<>();
		Map<String, Object> userInfo = (Map<String, Object>) session.getAttribute(Constants.USER_SESSION);

		List<MultipartFile> files = mReq.getFiles("file_upload_path");
		
		String upload_path = "chatFileHistory";
		List<Map<String, Object>> fileList = new ArrayList<>();
		String files_type = mReq.getParameter("file_type");
		String[] file_type = files_type.split(",");
		
		
		
		int i = 0;
		for (MultipartFile mFile : files) {
			fileData = saveFile(session, mFile, upload_path);

			fileData.put("user_id", StringUtil.get(userInfo.get("user_id")));
			fileData.put("writer_id", StringUtil.get(userInfo.get("user_id")));
			fileData.put("user_nm", StringUtil.get(userInfo.get("user_nm")));
			fileData.put("room_no", mReq.getParameter("room_no"));
			//fileData.put("content", mReq.getParameter("file_name"));
			fileData.put("file_type", file_type[i++]);
			dao.insertChatMsg(fileData);
			//dao.insertChatMsg(fileData);
			dao.fileInsert(fileData);
			logger.debug("chat_File_Upload 여기까지온다.");
			fileList.add(fileData);
			break;
		}
		return reFac.getJsonResultEntity(fileData);
	}

	// SaveFile
	private Map<String, Object> saveFile(HttpSession session, MultipartFile file, String savePath) {
		Map<String, Object> map = null;

		if (!file.isEmpty()) {
			// 미리보기 경로
//				String viewPath = "resources" + File.separator + savePath + File.separator
//						+ DateTimeUtil.getDate(DateTimeUtil.TYPE_DATE) + File.separator
//						+ session.getAttribute(Constants.USER_ID) + File.separator;
			String viewPath = config.getString("upload_path") + File.separator + savePath + File.separator
					+ DateTimeUtil.getDate(DateTimeUtil.TYPE_DATE) + File.separator
					+ session.getAttribute(Constants.USER_ID) + File.separator;

			// 다운 경로
			String filePath = FilenameUtils.concat(session.getServletContext().getRealPath("/"), viewPath);

			File dir = new File(filePath);

			try {
				if (!dir.exists()) {
					FileUtils.forceMkdir(dir);
				}

				String fileName = file.getOriginalFilename();
				
				String baseName = FilenameUtils.getBaseName(fileName);
				String ext = FilenameUtils.getExtension(fileName);

				if (!ext.equals("")) {
					ext = "." + ext;
				}

				File saveFile = new File(dir, fileName);

				// 중복 파일 체크
				for (int i = 1; saveFile.exists(); i++) {
					fileName = baseName + "_" + i + ext;
					saveFile = new File(dir, fileName);
				}

				// 파일 생성
				file.transferTo(saveFile);

				map = new HashMap<String, Object>();
				map.put("file_path", filePath + File.separator + fileName);
				map.put("view_path", "\\" + viewPath + fileName);
				map.put("file_name", file.getOriginalFilename());
				map.put("file_size", file.getSize());
				map.put("content", " 파일 첨부 : \\" + viewPath + fileName);

			} catch (IOException e) {
				logger.debug(e.getMessage());

			}
		}

		return map;
	}

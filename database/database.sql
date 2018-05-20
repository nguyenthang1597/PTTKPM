-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: QLTV
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ADMINACC`
--

DROP TABLE IF EXISTS `ADMINACC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ADMINACC` (
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(60) DEFAULT NULL,
  `ROLE` int(11) DEFAULT NULL,
  `ID` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  PRIMARY KEY (`USERNAME`),
  KEY `ID` (`ID`),
  CONSTRAINT `ADMINACC_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `THUTHU` (`MA_THUTHU`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMINACC`
--

LOCK TABLES `ADMINACC` WRITE;
/*!40000 ALTER TABLE `ADMINACC` DISABLE KEYS */;
INSERT INTO `ADMINACC` VALUES ('admin','$2a$10$Ag.lW.igYKF2cCK0f3IATecZeUtCjjMZVI2TdySJ43VmScuEGHR3e',2,NULL,1),('sysadmin','$2a$10$Ag.lW.igYKF2cCK0f3IATecZeUtCjjMZVI2TdySJ43VmScuEGHR3e',3,NULL,1),('thuthu1','$2a$10$Ag.lW.igYKF2cCK0f3IATecZeUtCjjMZVI2TdySJ43VmScuEGHR3e',1,12,1);
/*!40000 ALTER TABLE `ADMINACC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DOCGIA`
--

DROP TABLE IF EXISTS `DOCGIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DOCGIA` (
  `MA_DOCGIA` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `NGAYSINH` datetime DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `GIOITINH` tinyint(4) DEFAULT NULL,
  `DIACHI` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `CMND` varchar(12) DEFAULT NULL,
  `NGUOIGIAMHO` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`MA_DOCGIA`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DOCGIA`
--

LOCK TABLES `DOCGIA` WRITE;
/*!40000 ALTER TABLE `DOCGIA` DISABLE KEYS */;
INSERT INTO `DOCGIA` VALUES (7,'Nguyễn Hiếu Thắng','1997-09-19 00:00:00','nguyenthang15979@gmail.com',1,'abcd def','1234',NULL),(8,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `DOCGIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DSTACGIA`
--

DROP TABLE IF EXISTS `DSTACGIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DSTACGIA` (
  `MA_TACGIA` int(11) NOT NULL,
  `MA_SACH` int(11) NOT NULL,
  PRIMARY KEY (`MA_TACGIA`,`MA_SACH`),
  KEY `MA_SACH` (`MA_SACH`),
  CONSTRAINT `DSTACGIA_ibfk_1` FOREIGN KEY (`MA_TACGIA`) REFERENCES `TACGIA` (`MA_TACGIA`),
  CONSTRAINT `DSTACGIA_ibfk_2` FOREIGN KEY (`MA_SACH`) REFERENCES `SACH` (`MA_SACH`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DSTACGIA`
--

LOCK TABLES `DSTACGIA` WRITE;
/*!40000 ALTER TABLE `DSTACGIA` DISABLE KEYS */;
INSERT INTO `DSTACGIA` VALUES (4,12),(4,13),(8,16),(9,17),(9,18);
/*!40000 ALTER TABLE `DSTACGIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DSTHELOAI`
--

DROP TABLE IF EXISTS `DSTHELOAI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DSTHELOAI` (
  `MA_SACH` int(11) NOT NULL,
  `MA_THELOAI` int(11) NOT NULL,
  PRIMARY KEY (`MA_SACH`,`MA_THELOAI`),
  KEY `MA_THELOAI` (`MA_THELOAI`),
  CONSTRAINT `DSTHELOAI_ibfk_1` FOREIGN KEY (`MA_SACH`) REFERENCES `SACH` (`MA_SACH`),
  CONSTRAINT `DSTHELOAI_ibfk_2` FOREIGN KEY (`MA_THELOAI`) REFERENCES `THELOAI` (`MA_THELOAI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DSTHELOAI`
--

LOCK TABLES `DSTHELOAI` WRITE;
/*!40000 ALTER TABLE `DSTHELOAI` DISABLE KEYS */;
INSERT INTO `DSTHELOAI` VALUES (12,2),(13,3),(16,3),(17,3),(18,3);
/*!40000 ALTER TABLE `DSTHELOAI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DSTHETHUVIEN`
--

DROP TABLE IF EXISTS `DSTHETHUVIEN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DSTHETHUVIEN` (
  `MA_THUTHU` int(11) DEFAULT NULL,
  `MA_THE` int(11) NOT NULL,
  PRIMARY KEY (`MA_THE`),
  KEY `MA_THUTHU` (`MA_THUTHU`),
  CONSTRAINT `DSTHETHUVIEN_ibfk_1` FOREIGN KEY (`MA_THE`) REFERENCES `THETHUVIEN` (`MA_THE`),
  CONSTRAINT `DSTHETHUVIEN_ibfk_2` FOREIGN KEY (`MA_THUTHU`) REFERENCES `THUTHU` (`MA_THUTHU`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DSTHETHUVIEN`
--

LOCK TABLES `DSTHETHUVIEN` WRITE;
/*!40000 ALTER TABLE `DSTHETHUVIEN` DISABLE KEYS */;
/*!40000 ALTER TABLE `DSTHETHUVIEN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MUONSACH`
--

DROP TABLE IF EXISTS `MUONSACH`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MUONSACH` (
  `MA_THUTHU` int(11) NOT NULL,
  `MA_SACH` int(11) NOT NULL,
  `MA_THE` int(11) NOT NULL,
  `SOLUONG` int(11) DEFAULT NULL,
  `NGAYMUON` date DEFAULT NULL,
  `TINHTRANG` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`MA_THUTHU`,`MA_SACH`,`MA_THE`),
  KEY `MA_SACH` (`MA_SACH`),
  KEY `MA_THE` (`MA_THE`),
  CONSTRAINT `MUONSACH_ibfk_1` FOREIGN KEY (`MA_THUTHU`) REFERENCES `THUTHU` (`MA_THUTHU`),
  CONSTRAINT `MUONSACH_ibfk_2` FOREIGN KEY (`MA_SACH`) REFERENCES `SACH` (`MA_SACH`),
  CONSTRAINT `MUONSACH_ibfk_3` FOREIGN KEY (`MA_THE`) REFERENCES `THETHUVIEN` (`MA_THE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MUONSACH`
--

LOCK TABLES `MUONSACH` WRITE;
/*!40000 ALTER TABLE `MUONSACH` DISABLE KEYS */;
INSERT INTO `MUONSACH` VALUES (12,16,3,1,'2018-05-20',1),(12,17,3,1,'2018-05-20',1);
/*!40000 ALTER TABLE `MUONSACH` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NHAXUATBAN`
--

DROP TABLE IF EXISTS `NHAXUATBAN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `NHAXUATBAN` (
  `MA_NXB` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `THONGTIN` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `isHide` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`MA_NXB`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NHAXUATBAN`
--

LOCK TABLES `NHAXUATBAN` WRITE;
/*!40000 ALTER TABLE `NHAXUATBAN` DISABLE KEYS */;
INSERT INTO `NHAXUATBAN` VALUES (1,'Nhà Xuất Bản Giáo dục','<p>aaaaaaaaaaaaaaaa&acirc;dsađ&acirc;s</p>\r\n',1),(2,'Trẻ','',0);
/*!40000 ALTER TABLE `NHAXUATBAN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SACH`
--

DROP TABLE IF EXISTS `SACH`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SACH` (
  `MA_SACH` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(255) DEFAULT NULL,
  `NXB` int(11) DEFAULT NULL,
  `NGAYNHAP` datetime DEFAULT NULL,
  `SOLUONG` int(11) DEFAULT NULL,
  `NAMXB` int(11) DEFAULT NULL,
  `isHide` tinyint(4) DEFAULT NULL,
  `isHighlight` tinyint(4) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  `NGUOINHAP` int(11) DEFAULT NULL,
  `NGAYCAPNHAT` date DEFAULT NULL,
  `CONTENT` longtext,
  `SUMMARY` varchar(45) DEFAULT NULL,
  `SOLUONGCONLAI` int(11) DEFAULT NULL,
  PRIMARY KEY (`MA_SACH`),
  KEY `NXB` (`NXB`),
  CONSTRAINT `SACH_ibfk_1` FOREIGN KEY (`NXB`) REFERENCES `NHAXUATBAN` (`MA_NXB`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SACH`
--

LOCK TABLES `SACH` WRITE;
/*!40000 ALTER TABLE `SACH` DISABLE KEYS */;
INSERT INTO `SACH` VALUES (12,'Đối thoại với tuổi đôi mươi',2,'2018-05-13 00:00:00',1,2017,0,1,'1526196165623_doithoai.jpg',NULL,'2018-05-20','<p>Cuốn s&aacute;ch l&agrave; những lời t&acirc;m sự, t&acirc;m t&igrave;nh ch&acirc;n th&agrave;nh, thẳng thắn v&agrave; cởi mở về tất cả mọi thứ tr&ecirc;n đời, trong cuộc sống của ch&uacute;ng ta của nhạc sĩ, nh&agrave; văn, nh&agrave; b&aacute;o, nh&agrave; gi&aacute;o Vũ Đức Sao Biển. Từ những kỷ niệm tươi đẹp của một thời đ&ocirc;i mươi phơi phới đến những gian tru&acirc;n của một đời người&hellip;</p>\r\n','',1),(13,'Dạy con dùng tiền',2,'2018-05-13 00:00:00',1,2017,0,0,'1526196336991_day-con-dung-tien.jpg',NULL,'2018-05-13','','',1),(16,'Bố già',1,'2018-05-14 00:00:00',1,201,0,1,'1526279888714_sach-bo-gia.gif',NULL,'2018-05-20','<div class=\"content expand js-content\" id=\"gioi-thieu\">\r\n<p style=\"text-align:justify\"><span style=\"color:#ff6600; font-size:medium\"><strong>Bố Gi&agrave;</strong></span></p>\r\n\r\n<p style=\"text-align:justify\">Thế giới ngầm được phản &aacute;nh trong <a href=\"http://tiki.vn/sach-truyen-tieng-viet/sach-van-hoc.html\">tiểu thuyết</a> <strong>Bố gi&agrave;</strong> l&agrave; sự gặp gỡ giữa một b&ecirc;n l&agrave; &yacute; ch&iacute; cương cường v&agrave; nền tảng gia tộc chặt chẽ theo truyền thống Mafia xứ Sicily với một b&ecirc;n l&agrave; x&atilde; hội Mỹ nhập nhằng đen trắng, mảnh đất m&agrave;u mỡ cho những cơ hội l&agrave;m ăn bất ch&iacute;nh hứa hẹn những m&oacute;n lợi kếch x&ugrave;. Trong thế giới ấy, h&igrave;nh tượng <strong>Bố gi&agrave;</strong> được t&aacute;c giả d&agrave;y c&ocirc;ng khắc họa đ&atilde; trở th&agrave;nh bức ch&acirc;n dung bất hủ trong l&ograve;ng người đọc.</p>\r\n\r\n<p style=\"text-align:justify\">Từ một kẻ nhập cư tay trắng đến &ocirc;ng tr&ugrave;m tột đỉnh quyền uy, Don Vito Corleone l&agrave; con rắn hổ mang th&acirc;m trầm, nguy hiểm khiến kẻ th&ugrave; phải kiềng nể, e d&egrave;, nhưng cũng được bạn b&egrave;, th&acirc;n quyến xem như một đấng to&agrave;n năng đầy nghĩa kh&iacute;. Nh&acirc;n vật trung t&acirc;m ấy đồng thời cũng l&agrave; hiện th&acirc;n của một pho triết l&iacute; rất &ldquo;đời&rdquo; được nh&agrave;o nặn từ vốn sống của h&agrave;ng chục năm lăn lộn giữa chốn giang hồ bao phen v&agrave;o sinh ra tử.</p>\r\n\r\n<p style=\"text-align:justify\">Với kết cấu ho&agrave;n hảo, cốt truyện kh&ocirc;ng thiếu những pha h&agrave;nh động gay cấn, t&igrave;nh tiết bất ngờ v&agrave; kh&ocirc;ng kh&iacute; k&igrave;nh địch đến nghẹt thở, <strong>Bố gi&agrave;</strong> xứng đ&aacute;ng l&agrave; đỉnh cao trong sự nghiệp văn chương của<strong> Mario Puzo</strong>.</p>\r\n\r\n<p style=\"text-align:justify\"><strong>Nhận định</strong></p>\r\n\r\n<p style=\"text-align:justify\">&ldquo;Bố gi&agrave; l&agrave; sự tổng h&ograve;a của mọi hiểu biết. Bố gi&agrave; l&agrave; đ&aacute;p &aacute;n cho mọi c&acirc;u hỏi.&rdquo;</p>\r\n\r\n<p style=\"text-align:justify\"><strong>(Diễn vi&ecirc;n Tom Hanks)</strong></p>\r\n\r\n<p style=\"text-align:justify\">&ldquo;Bạn kh&ocirc;ng thể dừng đọc n&oacute; v&agrave; kh&oacute; l&ograve;ng ngừng mơ về n&oacute;.&rdquo;</p>\r\n\r\n<p style=\"text-align:justify\"><strong>(New York Times Magazine)</strong></p>\r\n\r\n<p style=\"text-align:justify\">&ldquo;Một t&aacute;c phẩm kinh điển về mafia&hellip; Tự bản th&acirc;n n&oacute; đ&atilde; tạo ra một thứ b&ugrave;a m&ecirc; hoặc độc giả.&rdquo;</p>\r\n\r\n<p style=\"text-align:justify\"><strong>(The Times)</strong></p>\r\n</div>\r\n','',1),(17,'Thế giới phẳng',1,'2018-05-14 00:00:00',1,2018,0,1,'1526280166983_img400.gif',NULL,'2018-05-20','<div class=\"content expand js-content\" id=\"gioi-thieu\">\r\n<p><strong><span style=\"color:#ff6600; font-size:medium\">Thế Giới Phẳng</span></strong></p>\r\n\r\n<p style=\"text-align:justify\">Trong xu thế to&agrave;n cầu h&oacute;a, việc tiếp cận v&agrave; tham khảo những tri thức đương đại từ những nước đ&atilde; ph&aacute;t triển về sự chuyển động của thế giới (đang ở bước ngoặt từ &ldquo;tr&ograve;n&rdquo; sang &ldquo;phẳng&rdquo;, như c&aacute;ch n&oacute;i của t&aacute;c giả) c&oacute; lẽ sẽ gi&uacute;p ch&uacute;ng ta c&oacute; th&ecirc;m những th&ocirc;ng tin bổ &iacute;ch để c&oacute; sự chủ động trong qu&aacute; tr&igrave;nh hội nhập.&nbsp;T&aacute;c phẩm được xếp v&agrave;o danh mục s&aacute;ch b&aacute;n chạy nhất ở Mỹ (kể từ lần xuất bản đầu ti&ecirc;n th&aacute;ng 4/ 2005 cho đến nay). Đ&acirc;y l&agrave; bản dịch từ bản s&aacute;ch gốc mới nhất được sửa chữa, cập nhật v&agrave; bổ sung hai chương mới nhất bởi ch&iacute;nh t&aacute;c giả.</p>\r\n</div>\r\n','',1),(18,'Cảm ơn vì đến trể',1,'2018-05-14 00:00:00',1,2018,0,0,'1526280284317_c23353ecf.jpg',NULL,'2018-05-20','<div class=\"content expand js-content\" id=\"gioi-thieu\">\r\n<p><strong>Cảm Ơn V&igrave; Đến Trễ</strong></p>\r\n\r\n<p>Tất cả ch&uacute;ng ta đều cảm nhận được một điều g&igrave; đ&oacute; to lớn đang diễn ra. Bạn cảm nhận được n&oacute; ở nơi l&agrave;m việc. Bạn cảm nhận được n&oacute; khi n&oacute;i chuyện với con c&aacute;i. Bạn kh&ocirc;ng thể kh&ocirc;ng thấy n&oacute; khi đọc b&aacute;o hay xem tin tức. Cuộc sống của ch&uacute;ng ta đang tăng tốc - v&agrave; đ&oacute; l&agrave; sự tăng tốc ch&oacute;ng mặt.</p>\r\n\r\n<p>Trong Cảm ơn v&igrave; đến trễ, một t&aacute;c phẩm kh&ocirc;ng giống bất kỳ t&aacute;c phẩm n&agrave;o &ocirc;ng từng viết trước đ&acirc;y, Thomas L. Friedman phơi b&agrave;y những sự chuyển động mang t&iacute;nh kiến tạo đang t&aacute;i định h&igrave;nh thế giới ng&agrave;y nay v&agrave; giải th&iacute;ch c&aacute;ch để tận dụng tối đa lợi &iacute;ch từ ch&uacute;ng.</p>\r\n\r\n<p>Luận đề của Friedman l&agrave;: để hiểu được thế kỷ 21, bạn cần phải hiểu 3 lực lượng lớn nhất của h&agrave;nh tinh n&agrave;y - Định luật Moore (c&ocirc;ng nghệ), Thị trường (to&agrave;n cầu h&oacute;a), v&agrave; Thi&ecirc;n nhi&ecirc;n (biến đổi kh&iacute; hậu v&agrave; mất đa dạng sinh học) - đang tăng tốc c&ugrave;ng l&uacute;c, l&agrave;m thay đổi nơi l&agrave;m việc, ch&iacute;nh trị, địa ch&iacute;nh trị, đạo đức v&agrave; cộng đồng. Một sự giải ph&oacute;ng năng lượng phi thường đang t&aacute;i định h&igrave;nh mọi thứ: từ c&aacute;ch ch&uacute;ng ta gọi taxi đến số mệnh của c&aacute;c quốc gia, v&agrave; đến những mối quan hệ th&acirc;n thiết nhất của ch&uacute;ng ta. N&oacute; đang tạo ra những cơ hội to lớn v&agrave; mới mẻ cho c&aacute;c c&aacute; nh&acirc;n v&agrave; những nh&oacute;m nhỏ để cứu - hoặc cũng c&oacute; thể l&agrave; ph&aacute; hủy - thế giới.</p>\r\n\r\n<p>Cảm ơn v&igrave; đến trễ l&agrave; một t&aacute;c phẩm về lịch sử đương đại, đ&oacute;ng vai tr&ograve; như một hướng dẫn thực h&agrave;nh cho việc suy nghĩ về kỷ nguy&ecirc;n của những sự tăng tốc n&agrave;y. N&oacute; cũng l&agrave; một lập luận cho việc &ldquo;đến trễ&rdquo; - tạm dừng để nhận thức s&acirc;u sắc kỷ nguy&ecirc;n lịch sử tuyệt vời m&agrave; ch&uacute;ng ta đang trải qua, v&agrave; cũng để suy ngẫm về những khả năng cũng như nguy cơ của n&oacute;. Friedman chỉ ra cho ch&uacute;ng ta c&aacute;ch để mỗi c&aacute; nh&acirc;n c&oacute; thể neo lại trong mắt b&atilde;o, v&agrave; c&aacute;ch c&aacute;c cộng đồng c&oacute; thể tạo ra &ldquo;nền tảng niềm tin&rdquo; để l&agrave;m điều tương tự với c&aacute;c nh&oacute;m d&acirc;n số ng&agrave;y c&agrave;ng đa dạng v&agrave; được số h&oacute;a của họ.</p>\r\n\r\n<p>Được viết bằng ng&ograve;i b&uacute;t đầy sức sống, tr&iacute; tuệ v&agrave; sự lạc quan đặc trưng &ldquo;kiểu Friedman&rdquo;, v&agrave; c&ugrave;ng với sự tiếp cận trực tiếp với rất nhiều người đi đầu trong những sự thay đổi m&agrave; &ocirc;ng mi&ecirc;u tả, Cảm ơn v&igrave; đến trễ l&agrave; t&aacute;c phẩm tham vọng nhất của Friedman - một chỉ dẫn thiết yếu của hiện tại v&agrave; tương lai.</p>\r\n</div>\r\n','',1),(19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `SACH` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TACGIA`
--

DROP TABLE IF EXISTS `TACGIA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TACGIA` (
  `MA_TACGIA` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(45) DEFAULT NULL,
  `TUOI` int(11) DEFAULT NULL,
  `THONGTIN` longtext,
  `isHide` tinyint(4) DEFAULT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MA_TACGIA`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TACGIA`
--

LOCK TABLES `TACGIA` WRITE;
/*!40000 ALTER TABLE `TACGIA` DISABLE KEYS */;
INSERT INTO `TACGIA` VALUES (4,'Fredrik Backman',36,'',0,'1526526775522_images.jpeg'),(5,'Vũ Đức Sao Biển',70,'<p>&Ocirc;ng t&ecirc;n thật l&agrave; <strong>Vũ Hợi</strong>, sinh ng&agrave;y <a href=\"https://vi.wikipedia.org/wiki/12_th%C3%A1ng_2\" title=\"12 tháng 2\">12 th&aacute;ng 2</a> năm <a href=\"https://vi.wikipedia.org/wiki/1948\" title=\"1948\">1948</a>, tại <a href=\"https://vi.wikipedia.org/wiki/Tam_K%E1%BB%B3\" title=\"Tam Kỳ\">Tam Kỳ</a>, <a href=\"https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Nam\" title=\"Quảng Nam\">Quảng Nam</a>. Nguy&ecirc;n qu&aacute;n &ocirc;ng tại Duy Vinh, <a href=\"https://vi.wikipedia.org/wiki/Duy_Xuy%C3%AAn\" title=\"Duy Xuyên\">Duy Xuy&ecirc;n</a>, Quảng Nam.</p>\r\n\r\n<p>Năm 18 tuổi, &ocirc;ng v&agrave;o <a href=\"https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh\" title=\"Thành phố Hồ Chí Minh\">S&agrave;i G&ograve;n</a> học Đại học Sư phạm ban Việt - H&aacute;n v&agrave; học Đại học Văn khoa, ban <a href=\"https://vi.wikipedia.org/wiki/Tri%E1%BA%BFt_h%E1%BB%8Dc\" title=\"Triết học\">Triết học</a> <a class=\"mw-disambig\" href=\"https://vi.wikipedia.org/wiki/Ph%C6%B0%C6%A1ng_%C4%90%C3%B4ng\" title=\"Phương Đông\">phương Đ&ocirc;ng</a>.<sup><a href=\"https://vi.wikipedia.org/wiki/V%C5%A9_%C4%90%E1%BB%A9c_Sao_Bi%E1%BB%83n#cite_note-tienphong-1\">[1]</a></sup></p>\r\n\r\n<p>Năm <a href=\"https://vi.wikipedia.org/wiki/1970\" title=\"1970\">1970</a>, &ocirc;ng tốt nghiệp v&agrave; đến <a href=\"https://vi.wikipedia.org/wiki/B%E1%BA%A1c_Li%C3%AAu\" title=\"Bạc Liêu\">Bạc Li&ecirc;u</a> dạy học c&aacute;c m&ocirc;n Văn v&agrave; <a href=\"https://vi.wikipedia.org/wiki/Tri%E1%BA%BFt_h%E1%BB%8Dc\" title=\"Triết học\">Triết học</a> bậc <a class=\"mw-redirect\" href=\"https://vi.wikipedia.org/wiki/Trung_h%E1%BB%8Dc\" title=\"Trung học\">trung học</a> tại trường C&ocirc;ng lập Bạc Li&ecirc;u cho đến năm <a href=\"https://vi.wikipedia.org/wiki/1975\" title=\"1975\">1975</a> th&igrave; &ocirc;ng rời khỏi nơi n&agrave;y. Mười năm sau &ocirc;ng trở lại Bạc Li&ecirc;u v&agrave; cho ra đời c&aacute;c ca kh&uacute;c về Bạc Li&ecirc;u v&agrave; miền đất <a href=\"https://vi.wikipedia.org/wiki/H%C6%B0%E1%BB%9Bng_Nam\" title=\"Hướng Nam\">phương Nam</a>.</p>\r\n\r\n<p>Sau <a href=\"https://vi.wikipedia.org/wiki/1975\" title=\"1975\">1975</a>, &ocirc;ng về Th&agrave;nh phố Hồ Ch&iacute; Minh dạy học, rồi l&agrave;m b&aacute;o. &Ocirc;ng c&oacute; một thời gian l&agrave;m tại ph&ograve;ng Gi&aacute;o dục huyện <a href=\"https://vi.wikipedia.org/wiki/Nh%C3%A0_B%C3%A8\" title=\"Nhà Bè\">Nh&agrave; B&egrave;</a>. &Ocirc;ng đ&atilde; v&agrave; đang c&ocirc;ng t&aacute;c ở c&aacute;c b&aacute;o: <a class=\"new\" href=\"https://vi.wikipedia.org/w/index.php?title=B%C3%A1o_C%C3%B4ng_an_TPHCM&amp;action=edit&amp;redlink=1\" title=\"Báo Công an TPHCM (trang chưa được viết)\">C&ocirc;ng an Th&agrave;nh phố Hồ Ch&iacute; Minh</a>, <a href=\"https://vi.wikipedia.org/wiki/Thanh_Ni%C3%AAn_(b%C3%A1o)\" title=\"Thanh Niên (báo)\">Thanh Ni&ecirc;n</a>, Kiến Thức Ng&agrave;y Nay, <a class=\"new\" href=\"https://vi.wikipedia.org/w/index.php?title=B%C3%A1o_Ph%C3%A1p_lu%E1%BA%ADt_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh&amp;action=edit&amp;redlink=1\" title=\"Báo Pháp luật Thành phố Hồ Chí Minh (trang chưa được viết)\">b&aacute;o Ph&aacute;p luật Th&agrave;nh phố Hồ Ch&iacute; Minh</a>, <a href=\"https://vi.wikipedia.org/wiki/Tu%E1%BB%95i_Tr%E1%BA%BB_(b%C3%A1o)\" title=\"Tuổi Trẻ (báo)\">Tuổi Trẻ Cười</a>...</p>\r\n\r\n<p>Ngo&agrave;i t&agrave;i viết: b&aacute;o, tiểu thuyết, nghi&ecirc;n cứu (về Kim Dung), &ocirc;ng c&ograve;n c&oacute; t&agrave;i s&aacute;ng t&aacute;c nhạc. Những b&agrave;i như: <em>Thu h&aacute;t cho người, Đ&ecirc;m G&agrave;nh H&agrave;o nghe điệu ho&agrave;i lang, Đau x&oacute;t l&yacute; chim quy&ecirc;n, Điệu buồn phương Nam,</em>...đều l&agrave; những t&aacute;c phẩm được nhiều người y&ecirc;u mến. V&igrave; những th&agrave;nh tựu n&agrave;y, &ocirc;ng đ&atilde; được kết nạp v&agrave;o Hội Nhạc sĩ Việt Nam, Hội Nh&agrave; b&aacute;o Việt Nam.</p>\r\n\r\n<p>Vũ Đức Sao Biển hiện đang được c&aacute;c đ&agrave;i truyền h&igrave;nh trung ương v&agrave; địa phương mời thực hiện c&aacute;c phim tư liệu về t&aacute;c giả v&agrave; t&aacute;c phẩm tr&ecirc;n lĩnh vực <a href=\"https://vi.wikipedia.org/wiki/%C3%82m_nh%E1%BA%A1c\" title=\"Âm nhạc\">&acirc;m nhạc</a>.</p>\r\n',0,'1526527161496_Vu-Duc-Sao-Bien-423x600.jpg'),(8,'Mario Puzo ',79,'<p><strong>Mario Gianluigi Puzo</strong> (<a href=\"https://vi.wikipedia.org/wiki/15_th%C3%A1ng_10\" title=\"15 tháng 10\">15 th&aacute;ng 10</a> năm <a href=\"https://vi.wikipedia.org/wiki/1920\" title=\"1920\">1920</a> &ndash; <a href=\"https://vi.wikipedia.org/wiki/2_th%C3%A1ng_7\" title=\"2 tháng 7\">2 th&aacute;ng 7</a> năm <a href=\"https://vi.wikipedia.org/wiki/1999\" title=\"1999\">1999</a>) l&agrave; một <a href=\"https://vi.wikipedia.org/wiki/Nh%C3%A0_v%C4%83n\" title=\"Nhà văn\">nh&agrave; văn</a>, <a href=\"https://vi.wikipedia.org/wiki/Nh%C3%A0_bi%C3%AAn_k%E1%BB%8Bch\" title=\"Nhà biên kịch\">nh&agrave; bi&ecirc;n kịch</a> người Mỹ, được biết đến với những <a href=\"https://vi.wikipedia.org/wiki/Ti%E1%BB%83u_thuy%E1%BA%BFt\" title=\"Tiểu thuyết\">tiểu thuyết</a> về <a href=\"https://vi.wikipedia.org/wiki/Mafia\" title=\"Mafia\">Mafia</a>, đặc biệt l&agrave; <em><a href=\"https://vi.wikipedia.org/wiki/B%E1%BB%91_gi%C3%A0_(ti%E1%BB%83u_thuy%E1%BA%BFt)\" title=\"Bố già (tiểu thuyết)\">Bố gi&agrave;</a></em> (1969), m&agrave; sau n&agrave;y &ocirc;ng đồng chuyển thể th&agrave;nh <a href=\"https://vi.wikipedia.org/wiki/B%E1%BB%91_gi%C3%A0_(phim)\" title=\"Bố già (phim)\">một bộ phim</a> c&ugrave;ng với <a href=\"https://vi.wikipedia.org/wiki/Francis_Ford_Coppola\" title=\"Francis Ford Coppola\">Francis Ford Coppola</a>. &Ocirc;ng đ&atilde; gi&agrave;nh được <a href=\"https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_Oscar_cho_k%E1%BB%8Bch_b%E1%BA%A3n_chuy%E1%BB%83n_th%E1%BB%83_xu%E1%BA%A5t_s%E1%BA%AFc_nh%E1%BA%A5t\" title=\"Giải Oscar cho kịch bản chuyển thể xuất sắc nhất\">Giải Oscar cho kịch bản chuyển thể xuất sắc nhất</a> v&agrave;o giữa những năm 1972 v&agrave; 1974. D&ugrave; l&agrave; một nh&agrave; văn được cưng chiều của Hollywood nhưng &ocirc;ng vẫn lu&ocirc;n cảm thấy thất vọng về kinh đ&ocirc; điện ảnh của Mỹ.</p>\r\n',0,'1526813666206_Mario_Puzo.jpg'),(9,'Thomas L. Friedman ',65,'<p><strong>Thomas Loren Friedman</strong> (sinh ng&agrave;y 20 th&aacute;ng 7 năm 1953) l&agrave; 1 nh&agrave; b&aacute;o, nh&agrave; b&igrave;nh luận người <a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" title=\"Hoa Kỳ\">Mỹ</a> về quan hệ ch&iacute;nh trị giữa c&aacute;c nước, bao gồm việc mậu dịch quốc tế, c&aacute;c vấn đề Trung Đ&ocirc;ng, to&agrave;n cầu h&oacute;a v&agrave; c&aacute;c vấn đề m&ocirc;i trường kh&ocirc;ng kh&iacute;. &Ocirc;ng l&agrave; chủ 1 chuy&ecirc;n mục xuất hiện tr&ecirc;n b&aacute;o <a href=\"https://vi.wikipedia.org/wiki/The_New_York_Times\" title=\"The New York Times\">The New York Times</a> 2 lần 1 tuần. &Ocirc;ng chủ yếu viết về đề t&agrave;i đối ngoại bao gồm thương mại to&agrave;n cầu, Trung Đ&ocirc;ng v&agrave; c&aacute;c vấn đề m&ocirc;i trường. &Ocirc;ng đ&atilde; 3 lần đoạt <a href=\"https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_Pulitzer\" title=\"Giải Pulitzer\">giải Pulitzer</a>, 2 lần cho mảng Ph&oacute;ng sự quốc tế &quot;International Reporting&quot; (1983,1988) v&agrave; 1 lần cho mảng B&igrave;nh luận &quot;Commentary&quot;(2002). Kể từ năm 2004, &ocirc;ng l&agrave; 1 th&agrave;nh vi&ecirc;n của Hội đồng Giải thưởng Pulitzer. Đồng thời, &ocirc;ng l&agrave; t&aacute;c giả của cuốn s&aacute;ch <a href=\"https://vi.wikipedia.org/wiki/Th%E1%BA%BF_gi%E1%BB%9Bi_ph%E1%BA%B3ng\" title=\"Thế giới phẳng\">Thế giới phẳng</a>.</p>\r\n',0,'1526813707543_445px-Thomas_Friedman_2005_(5).jpg');
/*!40000 ALTER TABLE `TACGIA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THELOAI`
--

DROP TABLE IF EXISTS `THELOAI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `THELOAI` (
  `MA_THELOAI` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `isHide` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`MA_THELOAI`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THELOAI`
--

LOCK TABLES `THELOAI` WRITE;
/*!40000 ALTER TABLE `THELOAI` DISABLE KEYS */;
INSERT INTO `THELOAI` VALUES (2,'Tình cảm',0),(3,'Tiểu thuyết',0);
/*!40000 ALTER TABLE `THELOAI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THETHUVIEN`
--

DROP TABLE IF EXISTS `THETHUVIEN`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `THETHUVIEN` (
  `MA_THE` int(11) NOT NULL AUTO_INCREMENT,
  `HSD` datetime DEFAULT NULL,
  `NGAYLAP` datetime DEFAULT NULL,
  `DOCGIA` int(11) DEFAULT NULL,
  PRIMARY KEY (`MA_THE`),
  KEY `DOCGIA` (`DOCGIA`),
  CONSTRAINT `THETHUVIEN_ibfk_1` FOREIGN KEY (`DOCGIA`) REFERENCES `DOCGIA` (`MA_DOCGIA`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THETHUVIEN`
--

LOCK TABLES `THETHUVIEN` WRITE;
/*!40000 ALTER TABLE `THETHUVIEN` DISABLE KEYS */;
INSERT INTO `THETHUVIEN` VALUES (3,'2020-12-31 00:00:00','2018-05-20 00:00:00',7);
/*!40000 ALTER TABLE `THETHUVIEN` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THUTHU`
--

DROP TABLE IF EXISTS `THUTHU`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `THUTHU` (
  `MA_THUTHU` int(11) NOT NULL AUTO_INCREMENT,
  `TEN` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `NGAYSINH` datetime DEFAULT NULL,
  `GIOITINH` tinyint(4) DEFAULT NULL,
  `DIACHI` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `SDT` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`MA_THUTHU`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THUTHU`
--

LOCK TABLES `THUTHU` WRITE;
/*!40000 ALTER TABLE `THUTHU` DISABLE KEYS */;
INSERT INTO `THUTHU` VALUES (12,'Nguyễn Thắng','2018-05-14 00:00:00',1,'A B C','aa@a','1111');
/*!40000 ALTER TABLE `THUTHU` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERACC`
--

DROP TABLE IF EXISTS `USERACC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERACC` (
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(60) DEFAULT NULL,
  `ID` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  PRIMARY KEY (`USERNAME`),
  KEY `fk_USERACC_1_idx` (`ID`),
  CONSTRAINT `fk_USERACC_1` FOREIGN KEY (`ID`) REFERENCES `DOCGIA` (`MA_DOCGIA`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERACC`
--

LOCK TABLES `USERACC` WRITE;
/*!40000 ALTER TABLE `USERACC` DISABLE KEYS */;
INSERT INTO `USERACC` VALUES ('ngthang123','$2a$10$/OPbbLIBHjMvEr5goctKb.Vw7XAnh/siA/C8vdmOgF0WPmXc.hbKG',8,1),('ngthang12311','$2a$10$ookMsJFccZwdmYB85k7D7uELtQV6yQlD5O3pAMotdFWmRWKJbsPX6',7,1),('NguyenThang','$2a$10$Ag.lW.igYKF2cCK0f3IATecZeUtCjjMZVI2TdySJ43VmScuEGHR3e',NULL,1);
/*!40000 ALTER TABLE `USERACC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERS` (
  `USERNAME` varchar(20) NOT NULL,
  `PASSWORD` varchar(20) DEFAULT NULL,
  `MA_DOCGIA` int(11) DEFAULT NULL,
  PRIMARY KEY (`USERNAME`),
  KEY `MA_DOCGIA` (`MA_DOCGIA`),
  CONSTRAINT `USERS_ibfk_1` FOREIGN KEY (`MA_DOCGIA`) REFERENCES `DOCGIA` (`MA_DOCGIA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE SACH set CONVERT TO CHARACTER SET utf8;
ALTER TABLE TACGIA set CONVERT TO CHARACTER SET utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-20 18:12:41

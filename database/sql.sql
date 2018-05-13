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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DOCGIA`
--

LOCK TABLES `DOCGIA` WRITE;
/*!40000 ALTER TABLE `DOCGIA` DISABLE KEYS */;
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
INSERT INTO `DSTACGIA` VALUES (4,11),(4,12),(4,13),(7,14);
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
INSERT INTO `DSTHELOAI` VALUES (11,2),(12,2),(13,3),(14,3);
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
  PRIMARY KEY (`MA_NXB`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NHAXUATBAN`
--

LOCK TABLES `NHAXUATBAN` WRITE;
/*!40000 ALTER TABLE `NHAXUATBAN` DISABLE KEYS */;
INSERT INTO `NHAXUATBAN` VALUES (1,'Nhà Xuất Bản Giáo dục','<p>aaaaaaaaaaaaaaaa&acirc;dsađ&acirc;s</p>\r\n'),(2,'Trẻ','');
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
  `TEN` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SACH`
--

LOCK TABLES `SACH` WRITE;
/*!40000 ALTER TABLE `SACH` DISABLE KEYS */;
INSERT INTO `SACH` VALUES (11,'Người đàn ông mang tên Ove',1,'2018-05-13 00:00:00',1,2017,1,0,'1526196231147_nguoi-dan-ong-mang-ten-ove.jpg',NULL,'2018-05-13','','',1),(12,'Đối thoại với tuổi đôi mươi',2,'2018-05-13 00:00:00',1,2017,1,1,'1526196165623_doithoai.jpg',NULL,'2018-05-13','','',1),(13,'Dạy con dùng tiền',2,'2018-05-13 00:00:00',1,2017,1,1,'1526196336991_day-con-dung-tien.jpg',NULL,'2018-05-13','','',1),(14,'Dẫn dắt: Lãnh đạo chứ không quản lý',2,'2018-05-13 00:00:00',1,2017,1,1,'1526196428099_dan-dat.png',NULL,'2018-05-13',NULL,NULL,1),(15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1);
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
  `TEN` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `TUOI` int(11) DEFAULT NULL,
  `THONGTIN` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`MA_TACGIA`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TACGIA`
--

LOCK TABLES `TACGIA` WRITE;
/*!40000 ALTER TABLE `TACGIA` DISABLE KEYS */;
INSERT INTO `TACGIA` VALUES (4,'Fredrik Backman',36,''),(5,'Vũ Đức Sao Biển',NULL,''),(6,'Adam Khoo & Keon Chee',NULL,''),(7,'Alex Ferguson, Michael Moritz',NULL,'');
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
  PRIMARY KEY (`MA_THELOAI`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THELOAI`
--

LOCK TABLES `THELOAI` WRITE;
/*!40000 ALTER TABLE `THELOAI` DISABLE KEYS */;
INSERT INTO `THELOAI` VALUES (2,'Tình cảm'),(3,'Tiểu thuyết');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THETHUVIEN`
--

LOCK TABLES `THETHUVIEN` WRITE;
/*!40000 ALTER TABLE `THETHUVIEN` DISABLE KEYS */;
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
INSERT INTO `USERACC` VALUES ('NguyenThang','$2a$10$Ag.lW.igYKF2cCK0f3IATecZeUtCjjMZVI2TdySJ43VmScuEGHR3e',NULL,1);
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

-- Dump completed on 2018-05-13 15:28:22

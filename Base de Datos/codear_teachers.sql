-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: codear
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.16-MariaDB

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
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `apellido` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `foto` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'Muriel','Kassulke','Jordon.Padberg98@hotmail.com','1-885-344-3524 x748','Practical Senior even-keeled','https://s3.amazonaws.com/uifaces/faces/twitter/turkutuuli/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(2,'Myrl','Schiller','Sheldon.Leffler@gmail.com','(477) 856-6885','optical Malta productize','https://s3.amazonaws.com/uifaces/faces/twitter/overcloacked/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(3,'Sterling','Howe','Christiana.Weimann@gmail.com','579-519-2276','generation Orchestrator white','https://s3.amazonaws.com/uifaces/faces/twitter/samscouto/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(4,'Frida','Rath','Dustin46@gmail.com','1-854-672-8883 x008','Plastic directional Pike','https://s3.amazonaws.com/uifaces/faces/twitter/zvchkelly/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(5,'Royal','Johnston','Louvenia93@yahoo.com','631.647.9052 x089','COM navigate sensor','https://s3.amazonaws.com/uifaces/faces/twitter/kkusaa/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(6,'Verda','Conroy','Ollie.Stiedemann@yahoo.com','713.834.3336 x8430','infomediaries Inlet RSS','https://s3.amazonaws.com/uifaces/faces/twitter/adobi/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(7,'Griffin','Rempel','Demarcus.Beatty7@hotmail.com','1-884-572-6301 x7644','open-source Luxembourg Small','https://s3.amazonaws.com/uifaces/faces/twitter/jmillspaysbills/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(8,'Ivah','Wiegand','Maymie_Boyle84@yahoo.com','(362) 416-6834 x8947','Checking Security blue','https://s3.amazonaws.com/uifaces/faces/twitter/joannefournier/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(9,'Antoinette','Tillman','Nedra_Gislason42@yahoo.com','350-924-1821 x725','Multi-tiered deposit cultivate','https://s3.amazonaws.com/uifaces/faces/twitter/lanceguyatt/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53'),(10,'Rickey','Lynch','Trudie_Wolf@gmail.com','643-459-0908','IB Account Clothing','https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg','2021-03-29 02:26:53','2021-03-29 02:26:53');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-07 17:39:34

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8_bin NOT NULL,
  `email` varchar(45) COLLATE utf8_bin NOT NULL,
  `telefono` varchar(45) COLLATE utf8_bin NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'adrian@gmail.com','adrian@gmail.com','','$2b$12$SOL9m5ULREvKuQXucggmJunfg.8V5K4uQQoZwvdCELk25.nTOsk0K','2021-03-20 17:30:49','2021-03-20 17:30:49',NULL,0),(2,'nose','nose@gmail.com','','$2b$12$0j91vxoqzyh3lHAbdlQg4edl027ZfVHmD6N79WZUISha8fwMRB5oi','2021-03-20 17:40:46','2021-03-20 17:40:46',NULL,0),(3,'ramiro','ramiro@gmail.com','','$2b$12$wufOzC5vg9qc6EjS04HWd.Nrb.yaPiuLdkK3xXEJzh4gvfomSqOdO','2021-03-20 23:31:13','2021-03-20 23:31:13',NULL,0),(4,'lala','lala@gmail.com','','$2b$12$Y9XBzwepuqBvKtI49U3pwuiL182VqS6s4nMod2AK6qIy7FVHy1g82','2021-03-20 23:32:54','2021-03-20 23:32:54',NULL,0),(5,'ivan','ivnbenitez@gmail.com','','$2b$12$14s96EtkpoFBhME6UEXrm.FCyvKGfz4f5OXfONojW/X5xhmDqoSAu','2021-03-21 17:39:48','2021-03-21 17:39:48',NULL,0),(6,'victoria','matias@gmail.com','1130509829','$2b$12$P45r2uQ9gRhij8oa4knCK.mlK8zRTFYtCbcGK5lDHG4eGICorVOyW','2021-03-21 18:15:17','2021-03-21 19:14:06',NULL,0),(7,'ivan','ivanbenitez@gmail.com','1130509825','$2b$12$9/.7ufvz9j7pwDXq18cCZuu95MSjlPDCR6DaqURRGRGRhpzYDtyU2','2021-03-21 23:54:56','2021-03-21 23:56:48',NULL,1),(8,'jose ','jose@gmail.com','','$2b$12$ysCWLVoMdLwpVb660a80leY940sOsjC6dLrKEmFO2mkd4RaRPUkLi','2021-04-05 21:28:46','2021-04-05 21:28:46',NULL,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-07 17:39:35

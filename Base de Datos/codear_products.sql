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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `descuento` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `imagen` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `publico` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `requisitos` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `resumen` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lecciones` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `teacherId` int(11) DEFAULT NULL,
  `levelId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `teacherId` (`teacherId`),
  KEY `levelId` (`levelId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`teacherId`) REFERENCES `teachers` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`levelId`) REFERENCES `levels` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Dise??o, desarrollo y publicaci??n de una p??gina web   ',1990,'1293,50','fotoCurso-1614867424872.jpg','Haz un recorrido completo por el proceso de creaci??n y publicaci??n de una web usando HTML, CSS y JavaScript','A todas las personas que tengan inter??s en aprender los principios del dise??o de una web y que quieran publicar su propia p??gina web.','Ser??a recomendable tener unos conocimientos b??sicos de HTML y CSS. Si no dispones de ellos, se recomienda completar el primer curso de Javier en Domestika: Introducci??n al desarrollo web responsive con HTML y CSS.','dise??o web tienda desarrollo pagina   ',27,1,4,2,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(2,'Gr??ficos vectoriales SVG: ilustrar y animar con c??digo   ',2990,'1943,50','fotoCurso-1614867697675.jpg','Aprende a trabajar con ilustraciones vectoriales en tus p??ginas web, de la l??nea a la animaci??n interactiva\r\nJavier Usobiaga ???Dise??ador Web y cofunda','A programadores, dise??adores, ilustradores y cualquier persona que tenga inter??s por el dise??o y curiosidad a la hora de desarrollar nuevos proyectos con HTML y CSS.','Se requieren conocimientos b??sicos previos de HTML y CSS.\r\n\r\nRespecto a los materiales y herramientas que necesitar??s para realizar el curso, deber??s contar con un ordenador, un editor de c??digo y un editor de gr??ficos vectoriales (como Illustrator, Sketch, Inkscape o similares).','dise??o web tienda desarrollo pagina   ',16,3,5,3,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(3,'Introducci??n al Desarrollo Web Responsive con HTML y CSS   ',1990,'1293,50','introduccionAlDesarrolloWebResponsive.jpg','Aprende los fundamentos del Desarrollo Web Frontend','A todas aquellas personas que deseen adquirir unos conocimientos b??sicos de HTML y CSS, sean dise??adores o no.','Para este curso no necesitas grandes conocimientos t??cnicos ni de dise??o. Necesitar??s un ordenador y un editor de c??digo gratuito.','dise??o web tienda desarrollo pagina   ',18,1,3,2,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(4,'Introducci??n al Desarrollo Web Responsive con HTML y CSS   ',1990,'1293,50','fotoCurso-1614867424872.jpg','Aprende los fundamentos del Desarrollo Web Frontend','A todas aquellas personas que deseen adquirir unos conocimientos b??sicos de HTML y CSS, sean dise??adores o no.','Para este curso no necesitas grandes conocimientos t??cnicos ni de dise??o. Necesitar??s un ordenador y un editor de c??digo gratuito.','dise??o web tienda desarrollo pagina   ',18,2,5,1,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(5,'Introducci??n a la programaci??n en JavaScript',1000,'10','introduccionAlDesarrolloWebResponsive.jpg','In??ciate en el lenguaje de programaci??n esencial para la creaci??n de webs interactivas','A cualquier persona con inter??s por el dise??o web y que tenga conocimientos b??sicos de HTML y CSS.','Necesitar??s conocimientos b??sicos de HTML y CSS, adem??s de un ordenador y un editor de c??digo.\r\n','dise??o web tienda desarrollo pagina javasript interaccion',12,2,8,3,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(6,'Animaci??n e interacci??n con JavaScript Avanzado',2200,'16','fotoCurso-1614867697675.jpg','In??ciate en el lenguaje de programaci??n esencial para la creaci??n de webs interactivas','A cualquier persona con inter??s por el dise??o web y que tenga conocimientos b??sicos de HTML y CSS.','Necesitar??s conocimientos b??sicos de HTML y CSS, adem??s de un ordenador y un editor de c??digo.\r\n','dise??o web tienda desarrollo pagina javasript interaccion',12,2,5,1,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(7,'Introducci??n a las librerias de JavaScript',1200,'15','introduccionAlDesarrolloWebResponsive.jpg','In??ciate en el lenguaje de programaci??n esencial para la creaci??n de webs interactivas','A cualquier persona con inter??s por el dise??o web y que tenga conocimientos b??sicos de HTML y CSS.','Necesitar??s conocimientos b??sicos de HTML y CSS, adem??s de un ordenador y un editor de c??digo.\r\n','dise??o web tienda desarrollo pagina javasript interaccion',12,1,1,2,'2021-03-29 02:26:53','2021-03-29 02:26:53'),(8,'Descubriendo Node, entorno de JavaScript   ',2000,'19','fotoCurso-1614867424872.jpg','Node. js es un entorno de tiempo de ejecuci??n de JavaScript (de ah?? su terminaci??n en . js haciendo alusi??n al lenguaje JavaScript).','A cualquier persona con inter??s por el dise??o web y que tenga conocimientos b??sicos de HTML y CSS.','Necesitar??s conocimientos b??sicos de HTML y CSS, adem??s de un ordenador y un editor de c??digo.\r\n','dise??o web tienda desarrollo pagina javasript interaccion   ',12,2,8,1,'2021-03-29 02:26:53','2021-03-29 02:26:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-07 17:39:33

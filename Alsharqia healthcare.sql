
CREATE DATABASE  IF NOT EXISTS `Alsharkia_Healthcare`;
Use Alsharkia_Healthcare;


create table `User` (
		 User_id int (30) NOT NULL unique  , 
		 FullName varchar(50)NOT NULL,
         email varchar(50)NOT NULL,
		 Age int (3) NOT NULL, 
		 Password1 text  default null,
		 Birth_date date default null , 
		 Street varchar (255) default null, 
		 City varchar (255)default null , 
		 Phone varchar (255) default null,
		 Gender varchar (255) default null ,
		 State varchar (255)default null , 
		 Medicine text ,
		 Medicine_history text,
         PRIMARY KEY (`User_id`)
         ) ENGINE=INNODB;


create table `Admin`  ( 
        Admin_id int (255)  NOT NULL AUTO_INCREMENT,
		Fname varchar (255) not null ,
        A_password text not null ,
        Age int (255) not null ,
        Phone varchar (255) default null ,
        Email varchar (255) default null ,
        PRIMARY KEY (Admin_id) 
		 ) ENGINE=INNODB ;

INSERT INTO Admin VALUES(1,'MAHMOUD',123456,22,01011223332,'MAHMOUD22@GMAIL.COM');
create table Hospital (
         Hospital_id int (30) NOT NULL AUTO_INCREMENT,
		 H_name varchar (255) default null ,
		 Num_beds int (200) default null , 
		 Num_intensive_case_beds int (255) default null ,
		 Region varchar (255) default null, 
		 City varchar (255) default null,
		 Street varchar (255) default null,
		 Num_boolds_banks int (255) default null,
         Admin_id int (255) default null ,
		 coordination varchar (255) default null,
         PRIMARY KEY (`Hospital_id`),
		FOREIGN KEY (`Admin_id`) REFERENCES `Admin` (Admin_id) 
         ON DELETE CASCADE
         ) ENGINE=INNODB;
		 
INSERT INTO `Hospital` VALUES (1,'Zagazig is general', 165, 58 ,'Central healthy region', 'Zagazig ','Next to Zagazig General Prison, Al-Hakama District ',null,1,'30.59335,31.50937') , (2,' faqous ', 277, 34 , 'Northern healthy region', 'faqous ', 'faqous City' , null,1,'30.73144,31.78701' ) , (3,'Al qanayat ', 100, 24 , 'Central healthy region', 'Al qanayat', 'Zagazig Road - Mansoura - Al Qanayat ' , null,1,'30.61367,31.46577' ) , (4,' Minia al-Qamh ', 173, 31 ,'Southern Healthy Region', 'Minia al-Qamh', 'Saad Zaghloul Street ' , null,1,'30.52145,31.35210' ) , (5,' Belbies ', 213, 26 , 'Southern Healthy Region', 'Belbies', 'Traffic Street ' ,null,1,'30.43109,31.55994' ) , (6,'Hahia ', 166, 32 ,'The healthy central region', 'Hahia ', 'Hahia' ,null,1,'30.67591,31.59640' ) , (7,' Abu Hammad ', 76, 10 , 'Central healthy region', 'Abu Hammad ', 'Tahrir street ' , null,1,'30.54162,31.67777' ) , (8,' dirib najam ', 182, 16 , 'The healthy central region', 'dirib najam', 'July 23 Street ' , null,1,'30.75075,31.45094' ), (9,' alzawamil ', 27, null , 'Southern Healthy Region', 'Belbies', 'alzawamil ' , null,1,'30.34861,31.43458' ) , (10,'Alsalihia', 80, 7 , 'Northern healthy region', 'Zagazig ', 'Alsalihia' , null,1,'30.63122,31.94054' ) , (11,' Alsaeadiiyn', 109, null , 'Southern Healthy Region', 'Minia al-Qamh ', 'Alsaeadiiyn' , null,1,'30.45227,31.37082' ) , (12,' mshtwl alsuwq ', 108, 11 , 'Southern Healthy Region', 'mshtwl alsuwq ', 'Medina Street ' , null,1,'30.43362,31.41756' ) , (13,'Alabrahimia ', 80, 13 ,'The healthy central region', 'Alabrahimia', 'sharie aljumhuria ' , null,1,'30.72383,31.55416' ) , (14,'alsuwfia ', 53, null , 'Northern healthy region', 'awlad saqr ', 'sharie almustashfaa awlad saqr' , null,1,'30.91395,31.76968'), (15,'awlad saqr ', 72, 6 ,'Northern healthy region', 'awlad saqr ','Tahrir Street Kafr Saqr ',null,1,'30.94462,31.71731') , (16,'Alqarin', 98, 14 , 'Northern healthy region', 'Alqarin','sharie alliwa eabd aleaziz alqmhawa',null,1,'30.60767,31.74598') , (17,'taliruk', 42, null , 'Northern healthy region', ' awlad saqr ', 'qaryat tularik awlad saqr',null,1,'30.89128,31.72934') , (18,'Abu Kabir ', 99, 19 ,'The healthy central region', 'Abu Kabir ',' Abu Kabir Zagazig Road ',null,1,'30.71998,31.65923') ,(19,'Alhusaynia', 147, 19 ,'The healthy central region', 'Alhusaynia ','Hospital Street',null,1,'30.86412,31.91269') , (20,'Kafr Saqr', 110, 12 , 'The healthy central region', 'Kafr Saqr ','Nasr district - the city of Mansheya',null,1,'30.79846,31.62839') , (21,'Sadr Zagazig', 113, null , 'Central healthy region', ' Zagazig ','alhariri awal alzaqaziq',null,1,'30.57257,31.50952') ,(22,'ophthalmology', 12, null , 'Central healthy region', 'Zagazig','Beside Industrial Technical Institute',null,1,'30.59820,31.52191') , (23,'hamiyat alzaqaziq', 86, null ,'Central healthy region', 'Zagazig ','manshiat alhamayat',null,1,'30.57363,31.50818') , (24,'humiyaat faqus', 26, null , 'Northern healthy region', 'faqus ','faqus',null,1,'30.35.35N,31.49.00E') , (25,'mustashfi sanahuat', 10, null , 'Southern Healthy Region', 'Minia al-Qamh','jisr bahr albaqar',null,1,'30.46620,31.33906') , (26,'Al Ahrar Hospital', 386, 65 , 'Central healthy region', 'Zagazig','Belbeis - Montazah Road',null,1,'30.56636,31.50174') , (27,'mustashfi altaamin bialeashir', 67, 7 , 'Northern healthy region', 'aleashir','aleashir',null,1,'30.28392,31.74883') , (28,'mustashfi aljamiea', 165, 58 , 'Central healthy region', 'Zagazig','College of Medicine Street',2,1,'30.58506,31.48730') ;



create table Specialization  ( 
	   Specialization_id int (100) NOT NULL AUTO_INCREMENT, 
       Name_Specialization varchar (200) ,
	   Num_specialists int (255) ,
	   Num_doctor_consultants int (255)  ,
	   Num_specialist_assistants int (255) , 
	   Num_Residents int (255) ,
       PRIMARY KEY (`Specialization_id`)
         ) ENGINE=INNODB;

INSERT INTO Specialization VALUES (1,'Recepion', 0, 3 , 1, 5 ) ,(2,' Diagnostic x-ray', 3, 18 , 27, 127) ,(3,'Nuclear medicine', 0, 0 , 0,1 ) ,(4,'Children', 31, 81 , 66, 155 ) , (5,'Newborn babies', 6, 20 ,74, 84 ),(6,'nose and ear', 9, 19 ,22, 36 ) , (7, 'Clinical pathology', 2, 18 , 32, 47 ) , (8,'Pathology', 1, 1 , 2, 9 ) , (9,'Bacteriologist', 1, 0 , 3, 0 ) , (10,'Blood bank', 0, 1 , 14, 15 ) , (11,'General interior', 16, 30 , 31, 46 ) , (12,'Digestive system and liver', 0, 3 , 7, 22 ) , (13,'Rheumatology and rehabilitation ', 2, 4 , 9, 28 ) , (14,'chest illness', 2, 15 ,20, 21 ) , (15,'Holistic industrial', 1, 14 ,26, 44 ), (16,'Anesthesia', 6, 17 ,15, 34 ) , (17,'Heart and blood vessels',3, 5 , 16, 14 ) , (18,'intensive care', 2, 5 , 5, 24 ) , (19,'Vascular surgery', 0, 0 , 0, 1 ) , (20,'Heart and chest surgery',0, 1 ,0, 1 ) , (21,'Childrens Surgery', 0, 0 ,8, 10 ) , (22,'General Surgery', 54, 52, 39, 47 ) , (23,'Burns and plastic surgery', 0 , 1 , 4, 11 ) , (24,'Orthopaedic Surgery', 4, 15 , 46, 70 ) , (25,'brain and nerv surgeory', 0,0 , 0, 4 ) , (26,'Urological Surgery', 3, 4 ,10, 10 ) , (27,'Leather and genital', 18, 36 , 84, 186 ) , (28,'Conjunctivitis ',13, 28 ,24, 100 ) , (29,'Obstetrics and Gynecology', 64, 117 ,93, 208 ) , (30,'Psychic and nervous', 0, 0 , 5, 8 ) , (31,'Speech and audio ', 0, 0, 1, 3 ) , (32,'Elderly medicine', 0, 0 ,0, 0 ) , (33,'heredity', 0, 0, 0, 0 ), (34,'Fevers', 11, 33 , 22, 20 ) ;

    
    
    

create table Blood_bank ( 
		 Blood_bank_id int (30) NOT NULL AUTO_INCREMENT ,
		 Platoon varchar (255) default null,
         Hospital_id int (30) not null ,
         PRIMARY KEY (`Blood_bank_id`) ,
         FOREIGN KEY (`Hospital_id`) REFERENCES Hospital (Hospital_id) 
         ON DELETE CASCADE
         ) ENGINE=INNODB;
		 

create table Medicine  ( 
		 Medicine_id int (255) NOT NULL AUTO_INCREMENT ,
		 M_Name varchar (500) default null ,
		 M_Organization  varchar (255) default null ,
		 Quality varchar (255)default null ,
		 Benefit text ,
		 M_Description text  ,
		PRIMARY KEY (`Medicine_id`)
         ) ENGINE=INNODB;
		
INSERT INTO Medicine  VALUES (1,'Hydroxychloroquine (400 mg twice in first day then 200 mg twice for 6 days)', null, null ,null, null ) , (2,'Ivermectin 6 mg (36 mg on day 0-3-6', null, null ,null, null  ) ,  (3,'Favipiravir 1600 TWICE daily first day then 600 mg twice daily', null, null ,null, null  ) ,  (4,'Zinc 50 mg daily', null, null ,null, null  ) ,  (5,'Acelylcysteine 200 mg td.s.', null, null ,null, null  ) ,  (6,'lactoferrin one sachet twice daily', null, null ,null, null  ) ,  (7,'Vitamin C 1 gm daily', null, null ,null, null  ) , (8,'Hydroxychloroquine + Ivermectin', null, null ,null, null  ) ,  (9,'Lopinavir/Ritonavir', null, null ,null, null  ) ,  (10,'Remdesivir for high risk population with SaO2 <92', null, null ,null, null  ) ,  (11,'Immune-modulators Anti-inflammatory', null, null ,null, null  ) ,  (12,'Steroids(if patient has severe dyspnea) RR>24 or CT scan showing rapid deterioration Dexamethasone 6 mg or its oral equivalent', null, null ,null, null  ) ,  (13,'Prophylactic anticoagulation if D-Dimer between Therapeutic 500 -1000 anti-coagulation if D-dimer > 1000', null, null ,null, null  ) ,  (14,'Remdesivir or Lopinavir/ Ritonavir', null, null ,null, null  ) ,  (15,'anticoagulation if D-Dimer between 500-1000 Therapeutic anti-coagulation if D-dimer > 1000 Or if severe hypoxia ', null, null ,null, null  ) ,  (16,'Steroids (Dexamethasone 6 mg or methyl prednisolone (1 mg/ kg /24 hours)', null, null ,null, null  ) ,  (17,'Tocilizumab 4-8 mg/kg/day for 2 doses 12 to 24 hours apart after failure of steroid therapy to improve the case for 24 hours', null, null ,null, null  ) ,  (18,' Before day 12 (under clinical trial) (after scientific committee approval)', null, null ,null, null  )  ; 


create table Vaccine_Conveys  (		 Vaccine_Conveys_id int (255) NOT NULL AUTO_INCREMENT ,
         Hospital_id int (30) not null ,
		 center varchar (255) default null ,
         location_name varchar (255) default null , 
		 Start_date  varchar (255) default null ,
		 End_date varchar (255) default null,
		 address varchar (255) default null,
		 coordination varchar (255) default null,
		 PRIMARY KEY (`Vaccine_Conveys_id`) ,
         FOREIGN KEY (`Hospital_id`) REFERENCES Hospital (Hospital_id) 
         ON DELETE CASCADE
         ) ENGINE=INNODB;

INSERT INTO Vaccine_Conveys VALUES(1,1,'Alsharkia','Zagazig second health center','9AM','9PM','In front of Zagazig Central Hospital, Ezz El Din Hafez Street','30.59858,31.51077'),(2,2,'faqus','Al-Dameen Unit, Health Administration, Fakos','9AM','9PM','The village of Al-Damin, Fakous','30.70414,31.74651'),(3,5,'belbies','Medical Center of Belbeis administration','9AM','9PM','Professor Ahmed Tartour Street Belbeis','30.41684,31.55570'),(4,7,'Abu Hammed','Medical Center of Abu Hammed administration','9AM','9PM','Abu Hammad administration','30.54048,31.67426'),(5,27,'Aleashir min ramadan','District 29 center in the administration of the tenth of Ramadan','9AM','9PM','Neighboring 29 in the tenth of Ramadan','30.31739,31.70576'),(6,6,'hahia','Fever department at Hehia Central Hospital','9AM','9PM','Ahmed Orabi Street','30.67592,31.59633'),(7,11,'alsaeadiiyn','Hepatitis Unit, formerly Saadian Central Hospita','9AM','9PM','Minya al-Qamh - alsaeadiiyn','30.45231,31.37088'),(8,18,'Abu keber','Abu keber','9AM','9PM','Abu Kabir Zagazig Road','30.72621,31.66575'),(9,3,'alqinayat','alqinayat hospital', '9AM','9PM','Zagazig - Mansoura Road','30.61369,31.46574'),(10,19,'Husseinieh','Husseinieh Central Hospital','9AM','9PM','Hospital Street, Hussainiya','30.86413,31.91267'),(11,15,'awlad saqr','awlad saqr Hospital ','9AM','9PM','awlad saqr center','30.94454,31.71738'),(12,4,'Minya al-Qamh','Minya al-Qamh Hospital','9AM','9PM','Saad Zaghloul Street','30.52144,31.35209'),(13,8,'dirib najam','dirib najam Hospital ','9AM','9PM','July 23 Street','30.75072,31.45094');


create table Patient_Medicine  ( 
        User_id int (30) not null ,
        Medicine_id int (30) not null ,
		FOREIGN KEY (`User_id`) REFERENCES `User` (User_id),
        FOREIGN KEY (`Medicine_id`) REFERENCES Medicine (Medicine_id)
        ON DELETE CASCADE
         ) ENGINE=INNODB; 
		

create table Hospital_phone  ( 
		 Hospital_id int (30) not null ,
         Phone  varchar (255) default null ,
		 FOREIGN KEY (`Hospital_id`) REFERENCES Hospital (Hospital_id) 
         ON DELETE CASCADE
         ) ENGINE=INNODB;
		 
         INSERT INTO Hospital_phone VALUES(1,'0552303188'),(2,'0553972760'),(3,'0552630310'),(4,'0553660049'),(5,'0552848304'),(6,'0552564363'),(7,'0553407055'),(8,'0553760591'),(9,'0559516330'),(10,'0553201692'),(11,'0553700302'),(12,'0552570323'),(13,'0559516303'),(14,'0552590595'),(15,'0553186088'),(16,'0553440435'),(17,'0553320174'),(18,'0553510137'),(19,'0552776420'),(20,'0553186088'),(21,'0552261510'),(22,'0552303745'),(23,'0552283286'),(24,'0553972727'),(25,'0553720003'),(26,'0552362740'),(27,'0554363104'),(28,'0552358544') ;
         

create table Hospital_Information  ( 
		 H_Date date,
         Hospital_id int (30) not null ,
         User_id int (30) not null ,
		FOREIGN KEY (`Hospital_id`) REFERENCES Hospital (Hospital_id) ,
        FOREIGN KEY (`User_id`) REFERENCES `User` (User_id)
        ON DELETE CASCADE
         ) ENGINE=INNODB;
		 

INSERT INTO `Admin` VALUES(1,'MAHMOUD',123456,22,01011223332,'MAHMOUD22@GMAIL.COM');

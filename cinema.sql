-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2019 at 08:58 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `moviename` varchar(250) NOT NULL,
  `genre` varchar(1000) NOT NULL,
  `screenID` int(11) NOT NULL,
  `movielength` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `movietimes`
--

CREATE TABLE `movietimes` (
  `MovieName` varchar(250) NOT NULL,
  `dateandtime` datetime NOT NULL,
  `ScreenId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `screen`
--

CREATE TABLE `screen` (
  `screenno` int(11) NOT NULL,
  `rows` int(11) NOT NULL,
  `columns` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `screenseats`
--

CREATE TABLE `screenseats` (
  `ScreenID` int(11) NOT NULL,
  `ScreenNo` int(11) NOT NULL,
  `Row` int(11) NOT NULL,
  `Col` int(11) NOT NULL,
  `Value` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `TicketNo` int(11) NOT NULL,
  `Username` varchar(250) NOT NULL,
  `MovieName` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(250) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(250) NOT NULL,
  `type` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`moviename`),
  ADD KEY `screenID` (`screenID`);

--
-- Indexes for table `movietimes`
--
ALTER TABLE `movietimes`
  ADD PRIMARY KEY (`MovieName`,`dateandtime`),
  ADD KEY `FK_movietimes_01` (`ScreenId`);

--
-- Indexes for table `screen`
--
ALTER TABLE `screen`
  ADD PRIMARY KEY (`screenno`);

--
-- Indexes for table `screenseats`
--
ALTER TABLE `screenseats`
  ADD PRIMARY KEY (`ScreenID`,`Row`,`Col`),
  ADD KEY `FK_screenno` (`ScreenNo`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`TicketNo`),
  ADD KEY `FK_ticket` (`Username`),
  ADD KEY `FK_ticket01` (`MovieName`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`screenID`) REFERENCES `screenseats` (`screenID`);

--
-- Constraints for table `movietimes`
--
ALTER TABLE `movietimes`
  ADD CONSTRAINT `FK_movietimes_01` FOREIGN KEY (`ScreenId`) REFERENCES `screenseats` (`ScreenID`),
  ADD CONSTRAINT `movietimes_ibfk_1` FOREIGN KEY (`MovieName`) REFERENCES `movie` (`moviename`);

--
-- Constraints for table `screenseats`
--
ALTER TABLE `screenseats`
  ADD CONSTRAINT `FK_screenno` FOREIGN KEY (`ScreenNo`) REFERENCES `screen` (`screenno`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `FK_ticket` FOREIGN KEY (`Username`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `FK_ticket01` FOREIGN KEY (`MovieName`) REFERENCES `movie` (`moviename`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

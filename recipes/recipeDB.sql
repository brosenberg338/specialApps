-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2023 at 11:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipes`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(4) NOT NULL,
  `recipeName` varchar(20) NOT NULL,
  `ingredient1` varchar(20) NOT NULL,
  `ingredient2` varchar(255) NOT NULL,
  `ingredient3` varchar(255) NOT NULL,
  `ingredient4` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `recipeName`, `ingredient1`, `ingredient2`, `ingredient3`, `ingredient4`) VALUES
(1, 'meat', 'beans', 'ketchup', 'onions', 'potatoes'),
(2, 'hot dogs', 'meat', 'ketchup', 'salt', 'preservatives'),
(3, 'pizza', 'cheese', 'sauce', 'sugar', 'spices'),
(4, 'fish', 'fish', 'salt', 'sugar', 'pepper'),
(5, 'candy apples', 'apple', 'sugar', 'honey', 'caramel'),
(6, 'hot cocoa', 'cocoa mix', 'water', 'milk', 'whipped cream'),
(8, 'coffee', 'coffee beans', 'water', 'sugar', 'milk'),
(9, 'macaroni and cheese', 'noodles', 'cheese', 'salt', 'pepper'),
(10, 'lemonade', 'lemons', 'water', 'sugar', 'flavoring'),
(11, 'peanut chews', 'peanuts', 'rice krispies', 'sugar', 'chocolate'),
(12, 'trail mix', 'almonds', 'cranberries', 'raisins', 'peanuts'),
(13, 'spicy salmon', 'fish', 'spices', 'sweet chili sauce', 'water'),
(14, 'steak', 'meat', 'salt ', 'onions', 'sauce'),
(15, 'salad', 'lettuce', 'avocados', 'peppers', 'onions'),
(50, 'baked apples', 'apple', 'honey', 'sugar', 'caramel'),
(51, 'hot dogs', 'meat', 'water', 'ketchup', 'mustard'),
(52, 'sushi', 'rice', 'seaweed', 'fish', 'avocado'),
(53, 'ice cream', 'milk', 'water', 'sugar', 'chocolate');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

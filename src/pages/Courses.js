import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';  // React Icons for dropdown toggles

const coursesData = [
  {
    title: 'ปวช. เทคโนโลยีสารสนเทศ',
    description: 'หลักสูตรที่เน้นการพัฒนาทักษะทางด้านเทคโนโลยีสารสนเทศพื้นฐาน เช่น การใช้คอมพิวเตอร์ การเขียนโปรแกรม การสร้างเว็บไซต์ ฯลฯ',
    skills: ['การใช้คอมพิวเตอร์', 'การเขียนโปรแกรม', 'การสร้างเว็บไซต์'],
    duration: '2 ปี',
    prerequisites: 'ไม่มี',
    format: 'การเรียนการสอนในห้องเรียน',
  },
  {
    title: 'ปวส. เทคโนโลยีสารสนเทศ',
    description: 'หลักสูตรที่เน้นทักษะการพัฒนาโปรแกรมคอมพิวเตอร์ขั้นสูง เช่น การสร้างแอปพลิเคชัน การจัดการฐานข้อมูล และการพัฒนาเว็บไซต์แบบเต็มรูปแบบ',
    skills: ['การพัฒนาโปรแกรม', 'การจัดการฐานข้อมูล', 'การพัฒนาแอปพลิเคชัน'],
    duration: '2 ปี',
    prerequisites: 'สำเร็จการศึกษาระดับปวช. เทคโนโลยีสารสนเทศ',
    format: 'การเรียนการสอนในห้องเรียน',
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="py-10 px-5 bg-gradient-to-r from-green-400 to-orange-400">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">หลักสูตรการเรียนการสอน</h1>
        <p className="text-xl text-gray-200 mt-4">แนะนำหลักสูตรที่เปิดสอนในสาขาเทคโนโลยีสารสนเทศ</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold text-green-600 mb-4">{course.title}</h2>

            {/* Dropdown to Show/Hide Course Details */}
            <CourseDropdown label="รายละเอียดหลักสูตร" content={course.description} />
            <CourseDropdown label="ทักษะที่เรียนรู้" content={course.skills.join(', ')} />
            <CourseDropdown label="ระยะเวลาหลักสูตร" content={course.duration} />
            <CourseDropdown label="คุณสมบัติที่ต้องการ" content={course.prerequisites} />
            <CourseDropdown label="รูปแบบการเรียนการสอน" content={course.format} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

// Dropdown Component for Course Details
const CourseDropdown = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full text-lg text-green-600 font-semibold hover:text-orange-600"
        onClick={toggleDropdown}
      >
        {label}
        {isOpen ? (
          <FaChevronUp className="ml-2 text-green-600" />
        ) : (
          <FaChevronDown className="ml-2 text-green-600" />
        )}
      </button>
      {isOpen && <p className="text-gray-700 mt-2">{content}</p>}
    </div>
  );
};

export default Courses;

import React from 'react';
import './Header.css'; // คุณสามารถสร้างไฟล์ CSS แยกเพื่อจัดการสไตล์

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">สาขาเทคโนโลยีสารสนเทศ</h1>
        <h1 className="header-title1">วิชา(Front-end)</h1>
      </div>
    </header>
  );
};

export default Header;

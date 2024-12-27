import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Home.css';  // รวมไฟล์ CSS สำหรับสไตล์

export default function Home() {
  return (
    <div className="container my-4">
      {/* ยินดีต้อนรับ */}
      <h2 className="text-center mt-5 gradient-text">ยินดีต้อนรับ</h2>
      <h2 className="text-center mt-3 gradient-text">สู่สาขาเทคโนโลยีสารสนเทศ</h2>
      
      <div className="card shadow-lg p-4 mb-4 rounded custom-card">
        <p className="text-center custom-text">
          เราเชื่อมั่นในพลังของเทคโนโลยีในการเชื่อมต่อ สร้างสรรค์ และขับเคลื่อนโลกไปสู่อนาคตที่ดียิ่งขึ้น ที่นี่คือสถานที่ที่ความคิดสร้างสรรค์และความเชี่ยวชาญทางเทคโนโลยีมาบรรจบกัน เพื่อสร้างโอกาสใหม่ๆ ให้กับคุณและสังคม เรามุ่งมั่นที่จะสนับสนุนการเรียนรู้และพัฒนาของคุณในทุกๆ ก้าวของเส้นทาง IT ไปด้วยกัน!
        </p>
      </div>

      {/* สไลด์ภาพ */}
      <div className="d-flex justify-content-center my-4">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg" className="d-block w-100 img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.lannapoly.ac.th/web/gallery/20240401-034105.jpg" className="d-block w-100 img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.lannapoly.ac.th/web/gallery/20241204-024758.jpg" className="d-block w-100 img-fluid rounded" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* ปรัชญาของสาขา */}
      <h3 className="text-center mt-4 gradient-text">นวัตกรรมเพื่อการพัฒนา ความรู้เพื่อความยั่งยืน</h3>
      <div className="card shadow-lg p-4 mb-4 rounded custom-card">
        <p className="text-center custom-text">
          เรามุ่งมั่นสร้างบุคลากรที่มีความรู้ ความสามารถ และจริยธรรม พร้อมที่จะเป็นผู้นำในยุคดิจิทัล เพื่อสร้างความเปลี่ยนแปลงเชิงบวกให้กับสังคมและโลกของเรา ผ่านการพัฒนาทางเทคโนโลยีที่ก้าวล้ำและยั่งยืน
        </p>
      </div>
    </div>
  );
}

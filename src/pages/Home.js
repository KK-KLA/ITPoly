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
              <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/465978142_1089522303173861_2020056444694595837_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UdXtXmcleq8Q7kNvgGTMJfl&_nc_oc=AdjkpkN9Dgul7pz1J8HtyKPH8feEEv3q_ce66PogH1eal74ZNLyYF7K23f4L1c2Igr_qKcVuhLEnZRi9afrL-4Vu&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=AmZrmjLHD__845Otl5Nvkg1&oh=00_AYAHbiR3CdOCmMEgH1as3QpSIKNLE75lng9xdv_i9hPK3w&oe=67741804" className="d-block w-100 img-fluid rounded" alt="..." />
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

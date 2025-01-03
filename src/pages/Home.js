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
              <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/465985343_1089521756507249_4254757350376348131_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lk2rXovn9P8Q7kNvgF8teh6&_nc_oc=AdgzLLdpVulsjg-MpZSE-o8nltpHPLe2qNaRAxpcK4BVBWw04m3siiHc98YBCMAoaDg&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A8b9ctynLtgwdw-vvziLyc9&oh=00_AYAo71JjvSZTrU4Ww8dH3wJddI_9_2qEKd8VI808KuEQig&oe=677D2854" className="d-block w-100 img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/465978142_1089522303173861_2020056444694595837_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=h_MMgYojIekQ7kNvgGiv1rl&_nc_oc=AdgWtQBk48vT9Ed3EyqJ_DZ6iAM9P21mB1h71P7eh8Qi4J_gy4sG6Ccue6pyk2BqVg4&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A_kK3OEg0EtnJ6bv3t9HwMu&oh=00_AYALb2CiGA1qcby8lbDCM-F3fEsvnZybwvSZewSoW06XJw&oe=677D5284" className="d-block w-100 img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/466037585_1089522346507190_890584093206479427_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3Eq2yWy7-qAQ7kNvgH2qmXY&_nc_oc=AdgWYKJg-RJQgHaPDzrSakvkH6ORWIIsiNA1OX0uXkg016wGoot6I_615dqE28O8TU0&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A6Xx73xawKb5xbvxlzyDcIz&oh=00_AYAogQ3yRdWjV_XA-WQMTCDv6wvZFqihBEO--2KRp3uwnQ&oe=677D3B98" className="d-block w-100 img-fluid rounded" alt="..." />
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

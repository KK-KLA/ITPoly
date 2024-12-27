// AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // สำหรับการใช้ Bootstrap


const AboutUs = () => {
  return (
    <div className="container my-5">
      {/* ส่วนหัวของหน้า */}
      <section className="text-center mb-5">
        <h2 className="display-4 text-success gradient-text">เกี่ยวกับเรา</h2>
        <p className="lead text-muted">
          เราคือองค์กรที่มุ่งมั่นในการพัฒนาเทคโนโลยีสารสนเทศและการศึกษา เพื่อนำพาความรู้และนวัตกรรมไปสู่สังคมและอนาคตที่ยั่งยืน
        </p>
      </section>

      {/* วิสัยทัศน์ และ พันธกิจ */}
      <section className="row mb-5">
        <div className="col-md-6">
          <h3 className="text-success">วิสัยทัศน์ของเรา</h3>
          <p className="text-muted">
            เรามุ่งหวังที่จะเป็นผู้นำในการสร้างและพัฒนาความยั่งยืนในด้านเทคโนโลยีสารสนเทศ
            และมุ่งเน้นการพัฒนาอย่างต่อเนื่องทั้งในด้านการศึกษาและการใช้เทคโนโลยี
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="text-success">พันธกิจของเรา</h3>
          <p className="text-muted">
            ส่งเสริมการเรียนรู้ในด้านเทคโนโลยีสารสนเทศเพื่อเตรียมความพร้อมให้กับเยาวชนและบุคลากรในอนาคต
            และสร้างความสัมพันธ์ที่ดีกับชุมชนและภาคอุตสาหกรรม
          </p>
        </div>
      </section>

      {/* ภาพทีมงาน */}
      <section className="text-center mb-5">
        <h3 className="text-success">ทีมงานของเรา</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/200" alt="Team Member 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">คุณสมชาย พัฒนาวุฒิ</h5>
                <p className="card-text text-muted">ผู้ก่อตั้งและ CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/200" alt="Team Member 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">คุณหญิง จิตราภรณ์</h5>
                <p className="card-text text-muted">หัวหน้าฝ่ายพัฒนาเทคโนโลยี</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src="https://via.placeholder.com/200" alt="Team Member 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">คุณนิรันดร์ สุขวิทยา</h5>
                <p className="card-text text-muted">หัวหน้าฝ่ายการตลาด</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

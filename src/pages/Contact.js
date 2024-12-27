import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Contact() {
  return (
    <div className="container my-4">
      {/* ยินดีต้อนรับ */}
      <h2 className="text-center mt-5 gradient-text">ติดต่อเรา</h2>
      <h2 className="text-center mt-3 gradient-text">สู่สาขาเทคโนโลยีสารสนเทศ</h2>
      
      <div className="card shadow-lg p-4 mb-4 rounded custom-card">
        <p className="text-center custom-text">
          <div>เบอร์โทร: 053 213 061</div>
          <div>อีเมล: lannapoly@lannapoly.ac.th</div>
          <div>ที่อยู่: 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300</div>
        </p>
      </div>
    </div>
  );
}

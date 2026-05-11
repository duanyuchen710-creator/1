"use client";

import { useState } from "react";

export default function BookingForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "你好";

    setMessage(`${name}，预约信息已记录，门店稍后会与你确认时间。`);
    form.reset();
  }

  return (
    <form className="form" id="bookingForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          你的称呼
          <input type="text" name="name" placeholder="例如：李女士" required />
        </label>
        <label>
          联系电话
          <input type="tel" name="phone" placeholder="请输入手机号" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          宠物类型
          <select name="pet" required defaultValue="">
            <option value="">请选择</option>
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>猫咪</option>
            <option>其他宠物</option>
          </select>
        </label>
        <label>
          预约服务
          <select name="service" required defaultValue="">
            <option value="">请选择</option>
            <option>基础洁净洗护</option>
            <option>全身精修造型</option>
            <option>皮毛舒缓护理</option>
            <option>到店评估后决定</option>
          </select>
        </label>
      </div>
      <label>
        备注
        <textarea
          name="note"
          placeholder="宠物年龄、体重、是否怕水、是否容易紧张等"
        />
      </label>
      <button className="submit" type="submit">
        提交预约
      </button>
      <div className="toast" id="toast" aria-live="polite">
        {message}
      </div>
    </form>
  );
}

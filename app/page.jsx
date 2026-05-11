import BookingForm from "../components/BookingForm";

const services = [
  {
    title: "基础洁净洗护",
    subtitle: "日常维护 · 轻度清洁",
    description:
      "适合每月定期洗护、轻微浮毛和日常外出后的基础清洁，重点把皮毛洗干净、吹透、梳顺。",
    includes: ["皮肤初检", "低敏香波洗浴", "分区吹干", "耳道与眼周清洁", "指甲与脚底毛修整"],
    suitable: "适合小型犬、短毛犬和日常维护型洗护",
    price: "¥98起",
    duration: "约 60-90 分钟",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=84",
    alt: "美容师在洗浴池中给小狗洗澡",
  },
  {
    title: "全身精修造型",
    subtitle: "洗护加修剪 · 造型调整",
    description:
      "在完整洗护基础上，根据犬种、毛量和主人偏好做比例修整，让脸部、身体和四肢线条更清爽。",
    includes: ["基础洗护全套", "脸部圆修", "身体比例修剪", "四肢线条整理", "尾部与脚型造型"],
    suitable: "适合贵宾、比熊、雪纳瑞等需要定期修剪的犬种",
    price: "¥198起",
    duration: "约 120 分钟",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=84",
    alt: "宠物美容师为狗狗修剪和梳理毛发",
  },
  {
    title: "皮毛舒缓护理",
    subtitle: "敏感皮肤 · 换毛季护理",
    description:
      "针对换毛、干痒、轻微打结和皮肤敏感状态，使用温和护理流程，减少拉扯和洗后干燥感。",
    includes: ["皮毛状态复核", "舒缓香波清洁", "护毛素停留护理", "局部打结处理", "换毛梳理与护理建议"],
    suitable: "适合长毛犬、猫咪、换毛季和敏感皮肤宠物",
    price: "¥168起",
    duration: "约 90 分钟",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=84",
    alt: "两只狗狗在护理后毛发蓬松干净",
  },
];

const steps = [
  {
    title: "健康询问",
    description: "确认年龄、疫苗、皮肤状态、过敏史和最近一次洗护时间。",
  },
  {
    title: "毛发评估",
    description: "检查打结、换毛、泪痕和耳道状态，再确定香波与护理强度。",
  },
  {
    title: "分区洗护",
    description: "按照头脸、身体、四肢、尾部顺序操作，减少宠物紧张感。",
  },
  {
    title: "交接反馈",
    description: "离店前说明护理结果，并给出居家梳毛和下次洗护建议。",
  },
];

const gallery = [
  {
    src: "/assets/store-reception-outline.png",
    alt: "高端宠物洗护店接待与零售等候区轮廓图",
  },
  {
    src: "/assets/store-wash-spa-outline.png",
    alt: "高端宠物洗护店透明洗浴和 SPA 区轮廓图",
  },
  {
    src: "/assets/store-grooming-outline.png",
    alt: "高端宠物洗护店美容修剪和造型工作室轮廓图",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="泡泡爪宠物洗护店首页">
          <span className="brand-mark">爪</span>
          <span>泡泡爪宠物洗护店</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">洗护套餐</a>
          <a href="#process">洗护流程</a>
          <a href="#gallery">门店环境</a>
          <a href="#booking">预约到店</a>
        </nav>
        <a className="call" href="tel:4008881234">
          400-888-1234
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <p className="eyebrow">预约制洗护 · 一宠一消毒 · 上海静安店</p>
            <h1>泡泡爪宠物洗护店</h1>
            <p>
              给猫咪和狗狗做温柔、干净、可追踪的洗护护理。透明操作区、低噪烘干舱、宠物专用香波，让每一次到店都更安心。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                立即预约
              </a>
              <a className="btn btn-secondary" href="#services">
                查看套餐
              </a>
            </div>
          </div>
        </section>

        <div className="stats" aria-label="门店数据">
          <div className="stat">
            <strong>8年</strong>
            <span>宠物洗护经验</span>
          </div>
          <div className="stat">
            <strong>15k+</strong>
            <span>服务宠物家庭</span>
          </div>
          <div className="stat">
            <strong>1:1</strong>
            <span>专属美容师接待</span>
          </div>
          <div className="stat">
            <strong>30min</strong>
            <span>到店前确认提醒</span>
          </div>
        </div>

        <section className="services" id="services">
          <div className="section-head">
            <h2>洗护套餐</h2>
            <p>
              套餐按实际护理动作展开展示：到店先做皮毛评估，再根据体型、毛量和皮肤状态复核价格，确认后才开始服务。
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-photo">
                  <img src={service.image} alt={service.alt} />
                </div>
                <div className="service-body">
                  <span className="service-kicker">{service.subtitle}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-list" aria-label={`${service.title}包含项目`}>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="service-fit">{service.suitable}</div>
                  <div className="price">
                    <strong>{service.price}</strong>
                    <span>{service.duration}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="process-wrap">
            <div className="process-photo">
              <img
                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1000&q=84"
                alt="干净明亮的宠物护理场景"
              />
            </div>
            <div>
              <div className="section-head">
                <h2>到店流程</h2>
                <p>
                  每只宠物都有独立记录，护理前后会同步状态，方便你掌握毛发、皮肤和情绪变化。
                </p>
              </div>
              <div className="steps">
                {steps.map((step) => (
                  <article className="step" key={step.title}>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="section-head">
            <h2>门店环境</h2>
            <p>等候区、洗护区和烘干区分离，工具一宠一消毒，减少交叉接触。</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item" key={item.src}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="booking" id="booking">
          <div>
            <h2>预约到店</h2>
            <p>提交后门店会在营业时间内回电确认宠物体型、毛量和可预约时段。</p>
            <div className="contact-list">
              <div>地址：上海市静安区花园路 88 号 1F</div>
              <div>营业时间：周一至周日 10:00-20:00</div>
              <div>电话：400-888-1234</div>
            </div>
          </div>

          <BookingForm />
        </section>
      </main>

      <footer>
        <span>© 2026 泡泡爪宠物洗护店</span>
        <span>一宠一档 · 预约优先 · 到店复核报价</span>
      </footer>
    </>
  );
}

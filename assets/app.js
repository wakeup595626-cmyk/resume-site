// ==========================================
// Zhang Guoshu Portfolio - Clean Minimalist Script
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Mobile Navigation Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close on click link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

// ==========================================
// Honors & Awards Filter Logic (17 Items)
// ==========================================
function filterHonors(category) {
  const buttons = document.querySelectorAll('.honor-tab-btn');
  buttons.forEach((btn) => {
    if (btn.getAttribute('data-hfilter') === category) {
      btn.className =
        'honor-tab-btn px-3 py-1.5 rounded-md font-medium transition-all bg-white text-slate-900 shadow-2xs';
    } else {
      btn.className =
        'honor-tab-btn px-3 py-1.5 rounded-md font-medium transition-all text-slate-600 hover:text-slate-900';
    }
  });

  const cards = document.querySelectorAll('.honor-card');
  cards.forEach((card) => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ==========================================
// Image Modal Viewer
// ==========================================
function openImageModal(src, caption) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-img-src');
  const cap = document.getElementById('modal-img-caption');
  if (!modal || !img) return;

  img.src = src;
  cap.textContent = caption || '';
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Close image modal when clicking backdrop
document.getElementById('image-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'image-modal') {
    closeImageModal();
  }
});

// ==========================================
// Project Details Modal Data & Controller
// ==========================================
const projectData = {
  ftu: {
    title: '10kV配电网自动化终端(FTU)智能感知与自主调控自愈系统',
    badge: '国家级挑战杯一等奖 · 洞口县供电公司实地验收',
    date: '2025.03 - 2025.11',
    role: '核心研发成员',
    overview:
      '面对现代中压配电网高比例分布式电源接入带来的暂态冲击、高阻单相接地故障选线困难，以及野外架空配电终端(FTU)备用电池因恶劣温湿度环境频繁故障失效的痛点，团队研发了涵盖“备电智能均衡 + 微秒级暂态故障选线 + 有向图自愈恢复”的成套软硬件系统。',
    sections: [
      {
        heading: '核心技术突破与架构',
        items: [
          '<strong>双模自适应电池主动均衡策略：</strong>设计高精度充放电监测控制电路，根据环境温湿度自适应调整涓流补电，极大遏制了备电电量衰减，使用寿命实测提升35%以上。',
          '<strong>高阻接地暂态分量辨识判据：</strong>提出综合考虑故障暂态初相角与零序电流突变量的综合选线算法，解决了传统稳态选线在高阻接地时灵敏度不足的问题。',
          '<strong>自主调控恢复算法：</strong>基于配电网络有向拓扑图矩阵，实现故障区段毫秒级快速切除与非故障区段负荷柔性转供。'
        ]
      },
      {
        heading: '工程落地与实测验收',
        items: [
          '在湖南邵阳洞口县供电公司进行配网真型环网柜现场汇报，实装测试通过验收。',
          '取得国家版权局计算机软件著作权：《FTU备用电源工作环境温湿度检测系统 V5.0》（登记号：2025SR1454812）。',
          '荣获第十九届“挑战杯”全国大学生课外学术科技作品竞赛【国家一等奖】。'
        ]
      }
    ],
    image: 'assets/field_test_grid.png',
    imageCaption: '邵阳洞口县供电公司真型试验场现场测试与产品验收'
  },
  camera: {
    title: '输电线路瞬态故障图像高速主动抓拍与多源感知装置',
    badge: 'CCTV中央电视台专题报道 · 14版技术攻坚迭代',
    date: '2025 - 2026',
    role: '项目负责人',
    overview:
      '架空高压输电线路在雷击闪络、山火、树障及外力破坏引发瞬态故障时，放电弧光仅持续数十毫秒，传统视频监拍设备由于触发延迟长，往往只能拍到故障后的黑烟，无法辨识根本诱因。本装置攻克了故障发生瞬间的主动高速精确触发。',
    sections: [
      {
        heading: '主要研发内容',
        items: [
          '<strong>光学与工频电场变化率双重硬件防误触：</strong>采用高速光电二极管脉冲捕获与工频电场畸变率(dE/dt)微分检测硬件，毫秒内完成硬件级故障判决。',
          '<strong>微秒级高速快门抓拍控制：</strong>实现触发信号发出后5微秒内曝光，完整捕获雷电与放电电弧初生全过程。',
          '<strong>极端恶劣环境实装验证：</strong>装置历经14版工程软硬件迭代，已在湖南邵阳雪峰山高海拔、覆冰高湿气候下部署运行，验证了极佳的电磁兼容抗干扰能力。'
        ]
      },
      {
        heading: '媒体与社会反响',
        items: [
          '团队科研攻关事迹与野外实地部署成果获中国中央电视台（CCTV）专项深度报道。',
          '入围“创客中国”湖南省创新创业大赛企业组复赛。'
        ]
      }
    ],
    image: 'assets/device_capture.png',
    imageCaption: '输电线路故障主动抓拍装置实物样机'
  },
  equalizer: {
    title: '低压台区功率移相均衡装置的研制',
    badge: '湖南省大学生创新训练计划 · 省级重点立项',
    date: '2025.06 - 至今',
    role: '核心研发成员',
    overview:
      '农村配电台区及城市末端电网中，单相大功率负荷接入导致三相严重不平衡，造成变压器过热、中性线烧损及末端低电压。本项目研究电力电子主动移相与动态负荷转移成套装置。',
    sections: [
      {
        heading: '技术要点',
        items: [
          '基于电力电子器件研制柔性移相开关矩阵，实现毫秒级无弧切换。',
          '嵌入式主控系统实时采集三相电压电流瞬时值，快速解算对称分量，自动生成最佳相间负荷均衡控制指令。',
          '有效降低台区变压器附加铜损与线损，稳定用户端供电电压。'
        ]
      }
    ],
    image: 'assets/cert_challenge_cup.jpg',
    imageCaption: '科研团队项目支撑平台'
  },
  smoke: {
    title: '便携式多功能排烟枪设备与消防应急转化',
    badge: '国家实用新型专利 (202521854639.6) · 消防实战合作',
    date: '2025.08',
    role: '第四发明人',
    overview:
      '针对建筑密闭过道、地下管廊等受限空间火灾浓烟积聚、救援视线受阻的问题，研制了手持便携、强风压轴流导流的排烟枪装置。',
    sections: [
      {
        heading: '核心价值与落地',
        items: [
          '设计特殊文丘里加速导流罩与高倍率气流增压风筒，在有限能耗下形成大穿透力正压风幕。',
          '正式申报并受理国家实用新型专利（申请号：202521854639.6）。',
          '与湖南城步苗族自治县消防救援大队、大祥区消防联合录制科普宣教视频，推广实战救援装备应用。'
        ]
      }
    ],
    image: 'assets/product_smoke_gun.jpg',
    imageCaption: '排烟枪设备实物样机'
  }
};

function openProjectModal(key) {
  const data = projectData[key];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const container = document.getElementById('project-modal-content');
  if (!modal || !container) return;

  let sectionsHtml = '';
  if (data.sections) {
    data.sections.forEach((sec) => {
      let listHtml = sec.items.map((it) => `<li class="text-xs sm:text-sm text-slate-700 leading-relaxed">${it}</li>`).join('');
      sectionsHtml += `
        <div class="space-y-2 mt-4">
          <h4 class="font-bold text-sm text-slate-900 border-l-2 border-sky-600 pl-2">${sec.heading}</h4>
          <ul class="list-disc list-inside space-y-1.5 pl-1">
            ${listHtml}
          </ul>
        </div>
      `;
    });
  }

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 text-xs font-semibold rounded-md bg-sky-50 text-sky-800 border border-sky-100">${data.badge}</span>
        <span class="text-xs font-mono text-slate-400 ml-auto">${data.date}</span>
      </div>

      <h3 class="text-xl sm:text-2xl font-bold text-slate-900">${data.title}</h3>
      <p class="text-xs font-mono text-slate-500">担任角色：<span class="text-slate-900 font-semibold">${data.role}</span></p>

      <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
        ${data.overview}
      </div>

      ${sectionsHtml}

      ${
        data.image
          ? `
        <div class="mt-4 rounded-xl overflow-hidden border border-slate-200">
          <img src="${data.image}" alt="${data.title}" class="w-full max-h-64 object-cover">
          <p class="text-[11px] text-slate-500 p-2 bg-slate-50 text-center font-mono border-t border-slate-100">${data.imageCaption || ''}</p>
        </div>
      `
          : ''
      }
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

document.getElementById('project-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
});

// ==========================================
// Print / Standard Resume Modal Controller
// ==========================================
function openPrintModal() {
  const modal = document.getElementById('print-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }
}

function closePrintModal() {
  const modal = document.getElementById('print-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

document.getElementById('print-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'print-modal') {
    closePrintModal();
  }
});

// ==========================================
// Utilities: Copy & Toast
// ==========================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

function copyContact(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`已复制：${text}`);
  }).catch(() => {
    prompt('请复制联系方式：', text);
  });
}

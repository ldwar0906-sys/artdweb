import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Search, 
  Globe as GlobeIcon, 
  Play, 
  FileText, 
  ArrowLeft, 
  Tag, 
  LayoutGrid, 
  Youtube // 유튜브 아이콘
} from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// 전체 포트폴리오 데이터를 생성하는 핵심 함수
const generateProjects = () => {
  const projects = [];
  let idCounter = 1;
  
  // ⭐️ 저장소 이름 직접 지정
  const baseUrl = "/artdweb"; 

  const addCategoryDocs = (category, subCategories, imagesOrIds, descSuffix, isVideo = false) => {
    if (!subCategories || subCategories.length === 0) {
      imagesOrIds.forEach((item, index) => {
        const val = isVideo ? (typeof item === 'object' ? item.id : item) : item;
        if (!val || String(val).trim() === "") return;

        const videoId = isVideo ? (typeof item === 'object' ? item.id : item) : undefined;
        const startParam = isVideo && item?.start ? `&start=${item.start}` : "";
        const imgUrl = isVideo ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : item;

        projects.push({
          id: idCounter++,
          category: category,
          subCategory: undefined,
          title: `${category} 작업 ${index + 1}`,
          year: "2024",
          img: imgUrl,
          youtubeId: videoId,
          startParam: startParam,
          description: `ArtDesign의 ${category} 프로젝트입니다. ${descSuffix}`
        });
      });
    } else {
      subCategories.forEach(sub => {
        const specificList = imagesOrIds[sub] || [];
        specificList.forEach((item, index) => {
          const val = isVideo ? (typeof item === 'object' ? item.id : item) : item;
          if (!val || String(val).trim() === "") return;

          const videoId = isVideo ? (typeof item === 'object' ? item.id : item) : undefined;
          const startParam = isVideo && item?.start ? `&start=${item.start}` : "";
          const imgUrl = isVideo ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : item;

          projects.push({
            id: idCounter++,
            category: category,
            subCategory: sub,
            title: `${sub} 작업 ${index + 1}`,
            year: "2024",
            img: imgUrl,
            youtubeId: videoId,
            startParam: startParam,
            description: `${sub} 관련 기획 및 디자인 결과물입니다. ${descSuffix}`
          });
        });
      });
    }
  };

  // --- [1. 편집디자인 이미지 리스트] ---
  const editorialImages = {
    "카달로그·브로슈어": [
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/1.jpg`, // 1번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/2.png`, // 2번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/3.png`, // 3번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/4.jpg`, // 4번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/5.png`, // 5번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/6.jpg`, // 6번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/7.jpg`, // 7번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/8.jpg`, // 8번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/9.png`, // 9번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/10.png`, // 10번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/11.jpg`, // 11번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/12.jpg`, // 12번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/13.jpg`, // 13번
      `${baseUrl}/images/EDITORIAL/CatalogBrochure/14.png`, // 14번
      "", // 15번
      "", // 16번
      "", // 17번
      "", // 18번
      "", // 19번
      ""  // 20번
    ],
    "리플렛·팜플렛": [
      "", // 1번
      "", // 2번
      "", // 3번
      "", // 4번
      "", // 5번
      "", // 6번
      "", // 7번
      "", // 8번
      "", // 9번
      "", // 10번
      "", // 11번
      "", // 12번
      "", // 13번
      "", // 14번
      "", // 15번
      "", // 16번
      "", // 17번
      "", // 18번
      "", // 19번
      ""  // 20번
    ],
    "포스터": [
      "", // 1번
      "", // 2번
      "", // 3번
      "", // 4번
      "", // 5번
      "", // 6번
      "", // 7번
      "", // 8번
      "", // 9번
      "", // 10번
      "", // 11번
      "", // 12번
      "", // 13번
      "", // 14번
      "", // 15번
      "", // 16번
      "", // 17번
      "", // 18번
      "", // 19번
      ""  // 20번
    ]
  };
  addCategoryDocs("EDITORIAL", ["카달로그·브로슈어", "리플렛·팜플렛", "포스터"], editorialImages, "기업의 가치를 담은 편집디자인입니다.");

  // --- [2. CI·BI 브랜딩 이미지 리스트] ---
  const brandingImages = [
    "", // 1번
    "", // 2번
    "", // 3번
    "", // 4번
    "", // 5번
    "", // 6번
    "", // 7번
    "", // 8번
    "", // 9번
    "", // 10번
    "", // 11번
    "", // 12번
    "", // 13번
    "", // 14번
    "", // 15번
    "", // 16번
    "", // 17번
    "", // 18번
    "", // 19번
    ""  // 20번
  ];
  addCategoryDocs("BRANDING", [], brandingImages, "브랜드의 정체성을 구축하는 디자인입니다.");

  // --- [3. 실·내외 사인물 이미지 리스트] ---
  const signageImages = {
    "간판·시트지": [
      "", // 1번
      "", // 2번
      "", // 3번
      "", // 4번
      "", // 5번
      "", // 6번
      "", // 7번
      "", // 8번
      "", // 9번
      "", // 10번
      "", // 11번
      "", // 12번
      "", // 13번
      "", // 14번
      "", // 15번
      "", // 16번
      "", // 17번
      "", // 18번
      "", // 19번
      ""  // 20번
    ],
    "현수막·배너": [
      "", // 1번
      "", // 2번
      "", // 3번
      "", // 4번
      "", // 5번
      "", // 6번
      "", // 7번
      "", // 8번
      "", // 9번
      "", // 10번
      "", // 11번
      "", // 12번
      "", // 13번
      "", // 14번
      "", // 15번
      "", // 16번
      "", // 17번
      "", // 18번
      "", // 19번
      ""  // 20번
    ]
  };
  addCategoryDocs("SIGNAGE", ["간판·시트지", "현수막·배너"], signageImages, "공간에 생명력을 불어넣는 사인물 디자인입니다.");

  // --- [4. 웹 콘텐츠 이미지 리스트] ---
  const webImages = [
    "", // 1번
    "", // 2번
    "", // 3번
    "", // 4번
    "", // 5번
    "", // 6번
    "", // 7번
    "", // 8번
    "", // 9번
    "", // 10번
    "", // 11번
    "", // 12번
    "", // 13번
    "", // 14번
    "", // 15번
    "", // 16번
    "", // 17번
    "", // 18번
    "", // 19번
    ""  // 20번
  ];
  addCategoryDocs("WEB", [], webImages, "시선을 사로잡는 SNS 및 디지털 콘텐츠 디자인입니다.");

  // --- [5. 영상제작 유튜브 ID 리스트] ---
  const videoIds = {
    "홍보영상": [
      { id: "" }, // 1번
      { id: "" }, // 2번
      { id: "" }, // 3번
      { id: "" }, // 4번
      { id: "" }, // 5번
      { id: "" }, // 6번
      { id: "" }, // 7번
      { id: "" }, // 8번
      { id: "" }, // 9번
      { id: "" }, // 10번
      { id: "" }, // 11번
      { id: "" }, // 12번
      { id: "" }, // 13번
      { id: "" }, // 14번
      { id: "" }, // 15번
      { id: "" }, // 16번
      { id: "" }, // 17번
      { id: "" }, // 18번
      { id: "" }, // 19번
      { id: "" }  // 20번
    ],
    "공연영상": [
      { id: "hsS_3X64YbE", start: 3248 }, // 1번
      { id: "Abh9eKQcIuE" },             // 2번
      { id: "FOOkzuEfwXk", start: 874 },  // 3번
      { id: "" }, // 4번
      { id: "" }, // 5번
      { id: "" }, // 6번
      { id: "" }, // 7번
      { id: "" }, // 8번
      { id: "" }, // 9번
      { id: "" }, // 10번
      { id: "" }, // 11번
      { id: "" }, // 12번
      { id: "" }, // 13번
      { id: "" }, // 14번
      { id: "" }, // 15번
      { id: "" }, // 16번
      { id: "" }, // 17번
      { id: "" }, // 18번
      { id: "" }, // 19번
      { id: "" }  // 20번
    ],
    "행사영상": [
      { id: "" }, // 1번
      { id: "" }, // 2번
      { id: "" }, // 3번
      { id: "" }, // 4번
      { id: "" }, // 5번
      { id: "" }, // 6번
      { id: "" }, // 7번
      { id: "" }, // 8번
      { id: "" }, // 9번
      { id: "" }, // 10번
      { id: "" }, // 11번
      { id: "" }, // 12번
      { id: "" }, // 13번
      { id: "" }, // 14번
      { id: "" }, // 15번
      { id: "" }, // 16번
      { id: "" }, // 17번
      { id: "" }, // 18번
      { id: "" }, // 19번
      { id: "" }  // 20번
    ]
  };
  addCategoryDocs("VIDEO", ["홍보영상", "공연영상", "행사영상"], videoIds, "메시지를 생동감 있게 전달하는 영상 프로젝트입니다.", true);

  // ⚠️ 비어있는 항목은 프로젝트에 자동 제외 됩니다.
  return projects;
};

const allProjects = generateProjects();

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeSubCategory, setActiveSubCategory] = useState('전체');
  const [showArchive, setShowArchive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const brandColor = "#EE7123";

  const navLinks = [
    { en: 'COMPANY', kr: '회사 소개', id: 'company' },
    { en: 'WHAT WE CREATE', kr: '포트폴리오', id: 'create' },
    { en: 'CONTACT US', kr: '문의하기', id: 'contact' },
  ];

  const categoryData = [
    { id: 'ALL', en: 'ALL WORKS', kr: '전체보기', sub: [] },
    { id: 'EDITORIAL', en: 'EDITORIAL', kr: '편집디자인', sub: ['전체', '카달로그·브로슈어', '리플렛·팜플렛', '포스터'] },
    { id: 'BRANDING', en: 'BRANDING', kr: 'CI·BI 브랜딩', sub: [] },
    { id: 'SIGNAGE', en: 'SIGNAGE', kr: '실·내외 사인물', sub: ['전체', '간판·시트지', '현수막·배너'] },
    { id: 'WEB', en: 'WEB CONTENTS', kr: '웹 콘텐츠', sub: [] },
    { id: 'VIDEO', en: 'VIDEO', kr: '영상제작', sub: ['전체', '홍보영상', '공연영상', '행사영상'] }
  ];

  const filteredProjects = allProjects.filter(p => {
    const matchCategory = activeCategory === 'ALL' || p.category === activeCategory;
    const matchSubCategory = activeSubCategory === '전체' || p.subCategory === activeSubCategory || !p.subCategory; 
    return matchCategory && matchSubCategory;
  });
  
  const displayedProjects = filteredProjects.slice(0, 6);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubCategory('전체');
  };

  const activeCategoryData = categoryData.find(c => c.id === activeCategory);
  let viewAllTitle = activeCategoryData?.kr || 'PROJECTS';
  if (activeCategory !== 'ALL' && activeSubCategory !== '전체' && activeCategoryData?.sub?.length > 0) {
    viewAllTitle = activeSubCategory;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'company', 'create', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (showArchive || selectedProject) ? 'hidden' : 'unset';
  }, [showArchive, selectedProject]);

  const ProjectCard = ({ project }) => {
    const isVideo = !!project.youtubeId;
    return (
      <div onClick={() => setSelectedProject(project)} className="group cursor-pointer font-pretendard animate-in fade-in slide-in-from-bottom duration-700">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-800 shadow-2xl border border-white/5">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900"><span className="text-slate-700 font-bold uppercase tracking-widest text-[10px]">ArtDesign Visual</span></div>
          <img src={project.img} alt={project.title} loading="lazy" className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 z-10" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20" style={{ backgroundColor: `${brandColor}E6` }}>
            <div className="text-center px-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 mx-auto mb-4 transition-transform group-hover:scale-110 shadow-lg">
                {project.youtubeId ? <Youtube size={28} className="text-[#FF0000]" /> : <ArrowUpRight size={24} />}
              </div>
              <p className="text-sm font-bold tracking-widest text-white uppercase font-pretendard">{project.youtubeId ? 'Play Video' : 'View Detail'}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: brandColor }}>{categoryData.find(c => c.id === project.category)?.kr}</span>
            {project.subCategory && <span className="text-[10px] text-slate-500 font-medium px-1.5 py-0.5 border border-slate-700 rounded-sm">{project.subCategory}</span>}
          </div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#EE7123] transition-colors tracking-tight text-white">{project.title}</h3>
          <p className="text-slate-500 font-medium text-sm">{project.year} | {project.youtubeId ? 'Motion Film' : 'Visual Solution'}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-pretendard selection:bg-[#EE7123] selection:text-white scroll-smooth overflow-x-hidden relative">
      
      {/* 상세 오버레이 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-white z-[500] overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
            <button onClick={() => setSelectedProject(null)} className="flex items-center space-x-3 text-slate-400 hover:text-slate-900 mb-12 group">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all font-pretendard"><ArrowLeft size={20} /></div>
              <span className="font-bold tracking-widest uppercase font-pretendard">Close</span>
            </button>
            <div className="flex flex-col items-center font-pretendard pb-24">
              <div className="w-full rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 mb-16 lg:mb-24">
                {selectedProject.youtubeId ? (
                  <div className="relative w-full aspect-video">
                    <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${selectedProject.youtubeId}?autoplay=1${selectedProject.startParam || ''}`} title={selectedProject.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                ) : (
                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-auto max-h-[75vh] object-cover bg-slate-100" />
                )}
              </div>
              <div className="w-full max-w-[800px] text-center animate-in slide-in-from-bottom duration-1000 delay-300 fill-mode-both">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <span className="px-5 py-2 bg-orange-50 text-[#EE7123] rounded-full text-xs font-black tracking-widest uppercase shadow-sm">{categoryData.find(c => c.id === selectedProject.category)?.kr}</span>
                  {selectedProject.subCategory && <span className="text-slate-500 font-bold text-xs border border-slate-200 px-4 py-1.5 rounded-full">{selectedProject.subCategory}</span>}
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-tight text-slate-900">{selectedProject.title}</h2>
                <div className="border-t border-slate-100 pt-16 mb-20">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#EE7123] mb-4"><Tag size={28} /></div>
                    <h4 className="font-black text-sm text-slate-400 uppercase tracking-widest">Project Description</h4>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-[700px]">{selectedProject.description}</p>
                  </div>
                </div>
                <button onClick={() => {setSelectedProject(null); window.location.hash = "#contact";}} className="px-14 py-6 bg-slate-950 text-white font-black tracking-widest rounded-full hover:bg-[#EE7123] transition-all duration-300 shadow-2xl hover:-translate-y-2">INQUIRY FOR THIS STYLE</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 아카이브 오버레이 (VIEW ALL 화면) */}
      {showArchive && (
        <div className="fixed inset-0 bg-slate-950 z-[400] overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
            <div className="sticky top-0 z-50 py-4 bg-slate-950/80 backdrop-blur-sm mb-12 flex justify-between items-center">
              <button onClick={() => setShowArchive(false)} className="flex items-center space-x-3 text-slate-400 hover:text-white group">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-[#EE7123] group-hover:bg-[#EE7123] transition-all"><ArrowLeft size={20} /></div>
                <span className="font-bold tracking-widest uppercase text-xs font-pretendard">Back</span>
              </button>
              <div className="flex items-center space-x-2 font-pretendard"><LayoutGrid size={18} className="text-[#EE7123]" /><span className="text-white font-black tracking-widest text-xs uppercase">{activeCategory} ARCHIVE ({filteredProjects.length})</span></div>
            </div>
            <div className="mb-16 font-pretendard">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic text-white mb-12 uppercase">{activeCategory} Works</h2>
              <div className="flex flex-wrap gap-4 relative z-20">
                {categoryData.map((cat) => (
                  <button key={`archive-${cat.id}`} onClick={() => handleCategoryClick(cat.id)} className={`group relative h-12 overflow-hidden px-8 rounded-full border transition-all tracking-widest ${activeCategory === cat.id ? 'bg-[#EE7123] border-[#EE7123] text-white shadow-lg' : 'border-white/10 text-slate-400 hover:text-white hover:border-white/30'}`}>
                    <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 flex flex-col items-center justify-start h-[96px]">
                      <span className="h-12 w-full flex items-center justify-center font-black text-[12px] uppercase">{cat.en}</span>
                      <span className="h-12 w-full flex items-center justify-center font-black text-[13px] whitespace-nowrap">{cat.kr}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className={`w-full flex transition-all duration-500 ease-in-out overflow-hidden ${activeCategoryData?.sub?.length > 0 ? 'max-h-24 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="flex flex-wrap gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                  {activeCategoryData?.sub?.map((sub) => (
                     <button key={`sub-${sub}`} onClick={() => setActiveSubCategory(sub)} className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all ${activeSubCategory === sub ? 'bg-[#EE7123] text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}>{sub}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-6 text-slate-400 text-sm font-bold tracking-widest">SHOWING: <span className="text-white">{filteredProjects.length}</span> PROJECTS</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pb-24">{filteredProjects.map((project) => (<ProjectCard key={`archive-item-${project.id}`} project={project} />))}</div>
          </div>
        </div>
      )}

      {/* 내비게이션 바 */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white py-3 shadow-md border-b border-slate-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center font-pretendard">
          <div className="flex items-center"><a href="#home" className={`text-2xl tracking-tight transition-colors duration-300 flex items-baseline gap-1 ${!isScrolled ? 'text-white' : 'text-slate-900'}`}><span className="font-black" style={{ color: brandColor }}>ART</span><span className="font-light" style={{ color: brandColor }}>DESIGN</span></a></div>
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={`group relative h-7 overflow-hidden text-[14px] font-bold tracking-tight transition-all duration-300 ${!isScrolled ? 'text-white' : 'text-slate-700'} ${activeSection === link.id ? '!opacity-100' : 'opacity-60'}`} style={{ color: activeSection === link.id ? brandColor : '' }}>
                <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 flex flex-col items-center"><span className="h-7 flex items-center justify-center whitespace-nowrap">{link.en}</span><span className="h-7 flex items-center justify-center font-black whitespace-nowrap" style={{ color: brandColor }}>{link.kr}</span></div>
              </a>
            ))}
          </div>
          <button className={`lg:hidden ${!isScrolled ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      {/* 히어로 */}
      <section id="home" className="relative h-screen flex items-center bg-slate-950 font-pretendard">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-40 animate-subtle-zoom" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 text-white">
          <span className="inline-block font-bold tracking-[0.4em] text-sm mb-4 uppercase italic" style={{ color: brandColor }}>Visual & Motion Studio</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">VISUAL<br />EXPERIENCE</h1>
          <p className="max-w-2xl text-xl font-light text-slate-300 mb-12">메시지의 본질을 꿰뚫는 창의적인 디자인 파트너, ArtDesign입니다.</p>
          <a href="#create" className="px-10 py-5 bg-[#EE7123] rounded-full font-bold inline-flex items-center group shadow-xl transition-transform hover:scale-105">PROJECT ARCHIVE <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" /></a>
        </div>
      </section>

      {/* 회사소개 */}
      <section id="company" className="py-32 bg-white font-pretendard">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <span className="font-bold tracking-[0.3em] text-sm uppercase mb-6 block" style={{ color: brandColor }}>01 / COMPANY</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">기업의 본질을 꿰뚫는<br />디자인 전문 그룹.</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">ArtDesign은 20년 이상의 노하우를 바탕으로 시각디자인의 새로운 표준을 제시합니다. 인쇄 매체부터 디지털 영상까지 통합 비주얼 솔루션을 제공합니다.</p>
            <div className="grid grid-cols-2 gap-8"><div className="flex items-center space-x-4"><div className="p-3 bg-orange-50 rounded-xl" style={{ color: brandColor }}><FileText size={24}/></div><div className="font-bold">Print Media</div></div><div className="flex items-center space-x-4"><div className="p-3 bg-orange-50 rounded-xl" style={{ color: brandColor }}><Play size={24}/></div><div className="font-bold">Motion Film</div></div></div>
          </div>
          <div className="space-y-12">
            <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-100 group"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="grid grid-cols-2 gap-10"><div><div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">3,500+</div><div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Works</div></div><div><div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">24Yrs</div><div className="text-sm font-bold text-slate-400 uppercase tracking-widest">History</div></div></div>
          </div>
        </div>
      </section>

      {/* 포트폴리오 */}
      <section id="create" className="py-32 bg-slate-950 text-white font-pretendard">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 relative z-20">
            <div><span className="font-bold tracking-[0.3em] text-sm uppercase mb-4 block" style={{ color: brandColor }}>02 / WHAT WE CREATE</span><h2 className="text-4xl md:text-6xl font-black tracking-tighter italic font-pretendard">Portfolio</h2></div>
            <div className="flex flex-wrap gap-4 font-pretendard">
              {categoryData.map((cat) => (
                <button key={`filter-${cat.id}`} onClick={() => handleCategoryClick(cat.id)} className={`group relative h-12 overflow-hidden px-8 rounded-full border tracking-widest transition-all ${activeCategory === cat.id ? 'bg-[#EE7123] border-[#EE7123] text-white shadow-lg shadow-orange-950/40' : 'border-white/10 hover:border-white/40 text-slate-400'}`}>
                  <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 flex flex-col items-center justify-start h-[96px]"><span className="h-12 w-full flex items-center justify-center font-black text-[12px] uppercase">{cat.en}</span><span className="h-12 w-full flex items-center justify-center font-black text-[13px] whitespace-nowrap">{cat.kr}</span></div>
                </button>
              ))}
            </div>
          </div>
          <div className={`w-full flex justify-end transition-all duration-500 ease-in-out overflow-hidden ${activeCategoryData?.sub?.length > 0 ? 'max-h-24 opacity-100 mb-12' : 'max-h-0 opacity-0 mt-0'}`}>
            <div className="flex flex-wrap gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
              {activeCategoryData?.sub?.map((sub) => (
                 <button key={`sub-main-${sub}`} onClick={() => setActiveSubCategory(sub)} className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all ${activeSubCategory === sub ? 'bg-[#EE7123] text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/10'}`}>{sub}</button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">{displayedProjects.map((project) => (<ProjectCard key={`main-grid-${project.id}`} project={project} />))}</div>
          {filteredProjects.length > 6 && (
            <div className="flex justify-center mt-12 border-t border-white/10 pt-16">
              <button onClick={() => setShowArchive(true)} className="px-12 py-5 font-bold tracking-widest uppercase border-2 border-slate-700 rounded-full hover:border-[#EE7123] hover:bg-[#EE7123] transition-all flex items-center group font-pretendard">VIEW ALL {viewAllTitle} ({filteredProjects.length})<ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" /></button>
            </div>
          )}
        </div>
      </section>

      {/* 문의하기 */}
      <section id="contact" className="py-32 bg-white font-pretendard">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 font-pretendard">
          <div>
            <span className="font-bold tracking-[0.3em] text-sm uppercase mb-6 block" style={{ color: brandColor }}>03 / CONTACT US</span>
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter italic leading-none font-pretendard">Work Together</h2>
            <div className="space-y-10"><div className="flex items-start space-x-6"><div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 font-pretendard" style={{ color: brandColor }}><MapPin size={24} /></div><div><h4 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-2 font-pretendard">Studio</h4><p className="text-xl font-bold">경남 창원시 마산회원구 3·15대로 509 3층</p></div></div><div className="flex items-start space-x-6"><div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 font-pretendard" style={{ color: brandColor }}><Mail size={24} /></div><div><h4 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-2 font-pretendard">Email</h4><p className="text-xl font-bold">work@artdesign.co.kr</p></div></div></div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[40px] shadow-sm border border-slate-100 font-pretendard">
            <form className="space-y-6 font-pretendard" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6"><input type="text" className="w-full bg-white rounded-xl p-4 shadow-sm focus:ring-2 focus:ring-[#EE7123] outline-none transition-all font-pretendard" placeholder="성함/기업명" /><input type="email" className="w-full bg-white rounded-xl p-4 shadow-sm focus:ring-2 focus:ring-[#EE7123] outline-none transition-all font-pretendard" placeholder="이메일" /></div>
              <textarea rows={4} className="w-full bg-white rounded-xl p-4 shadow-sm focus:ring-2 focus:ring-[#EE7123] outline-none resize-none transition-all font-pretendard" placeholder="프로젝트 문의 내용을 적어주세요." />
              <button className="w-full text-white font-black py-5 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-orange-900/10 font-pretendard" style={{ backgroundColor: brandColor }}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 border-t border-white/5 font-pretendard">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left font-pretendard">
          <div className="flex items-baseline gap-1"><span className="font-black text-2xl" style={{ color: brandColor }}>ART</span><span className="font-light text-2xl" style={{ color: brandColor }}>DESIGN</span></div>
          <p className="text-slate-500 text-sm italic">© 2024 ArtDesign Visual Group. All rights reserved.</p>
          <div className="flex space-x-6"><Instagram className="cursor-pointer hover:text-[#EE7123] transition-colors" /><Facebook className="cursor-pointer hover:text-[#EE7123] transition-colors" /><Linkedin className="cursor-pointer hover:text-[#EE7123] transition-colors" /></div>
        </div>
      </footer>

      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background: #EE7123; border-radius: 10px; }
        .animate-in { animation-duration: 0.5s; animation-fill-mode: both; }
        .fade-in { animation-name: fadeIn; }
        .slide-in-from-bottom { animation-name: slideInBottom; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInBottom { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes subtle-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.05); } }
        .animate-subtle-zoom { animation: subtle-zoom 20s ease-out infinite alternate; }
      `}</style>
    </div>
  );
};

export default App;
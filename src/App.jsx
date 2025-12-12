import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, BarChart2, BookOpen, Users, ArrowRight, ChevronRight, Mail, Linkedin, Phone, Target, Award, AlertCircle, AlertTriangle, Globe, Rocket, Briefcase, Facebook, Instagram, Home, Send, Loader, Settings } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Estados del Formulario de Contacto
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    company: '',
    message: 'Equipo desordenado / Sin proceso'
  });
  const [formStatus, setFormStatus] = useState('idle');

  // --- SEO OPTIMIZATION ---
  useEffect(() => {
    document.title = "SalesOps Consulting | Optimización CRM & Ventas B2B, B2C y B2G";
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Transformamos equipos comerciales con SalesOps, Playbooks y Automatización. Consultoría estratégica para empresas B2B, B2C y B2G que buscan crecimiento predecible.');

    // Keywords
    let metaKeys = document.querySelector('meta[name="keywords"]');
    if (!metaKeys) {
        metaKeys = document.createElement('meta');
        metaKeys.name = "keywords";
        document.head.appendChild(metaKeys);
    }
    metaKeys.setAttribute('content', 'Optimización de CRM, Ingeniería de Ventas, SalesOps, Automatización Comercial, Sales Playbooks, Ventas B2B, Ventas B2C, Licitaciones B2G');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- INTEGRACIÓN HUBSPOT ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // *** PON TUS DATOS DE HUBSPOT AQUÍ ***
    const PORTAL_ID = '50757292'; 
    const FORM_GUID = '33261988-2be8-448e-854d-43e75bc23d3b'; 

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

    const requestBody = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.company },
        { name: 'message', value: formData.message } 
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'SalesOps Consulting Web'
      }
    };

    try {
      // Simulación de envío (borrar esto al activar el fetch real)
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      setFormStatus('success');
      setFormData({ firstname: '', email: '', company: '', message: 'Equipo desordenado / Sin proceso' });
      
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    }
  };

  // --- LÓGICA DE EVALUACIÓN ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "¿Qué CRM utiliza tu equipo actualmente?",
      options: [
        { text: "Excel, hojas de cálculo o cuadernos.", points: 0 },
        { text: "Salesforce, Pipedrive, Zoho u otro CRM (No HubSpot).", points: 5 },
        { text: "HubSpot CRM.", points: 10 }
      ]
    },
    {
      question: "¿Sientes que tu proyección de venta (Forecast) no está alineada a tus resultados reales a fin de mes?",
      options: [
        { text: "Totalmente desalineada. Es una apuesta y solemos fallar por mucho.", points: 0 },
        { text: "A veces acertamos, pero requiere mucho trabajo manual limpiar la data.", points: 5 },
        { text: "No, mi proyección es precisa, automática y se cumple.", points: 10 }
      ]
    },
    {
      question: "Si contratas a un vendedor nuevo mañana, ¿cuánto tarda en ser productivo?",
      options: [
        { text: "3 a 6 meses. Aprende 'mirando' a los más antiguos (osmosis).", points: 0 },
        { text: "Le damos una capacitación básica del producto, pero depende mucho de su talento individual.", points: 5 },
        { text: "Menos de 1 mes. Tenemos un Playbook y un programa de Onboarding estructurado.", points: 10 }
      ]
    },
    {
      question: "¿Qué pasa con los leads (prospectos) que NO compran de inmediato?",
      options: [
        { text: "Quedan en el olvido ('Cementerio de Leads') o en un Excel perdido.", points: 0 },
        { text: "El vendedor intenta llamar un par de veces y si no contestan, los marca como cerrados.", points: 5 },
        { text: "Entran automáticamente a una secuencia de nutrición (Nurturing) a largo plazo para reactivarlos.", points: 10 }
      ]
    }
  ];

  const handleAnswer = (points) => {
    const newScore = score + points;
    setScore(newScore);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setIsAssessmentOpen(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const getResultFeedback = () => {
    if (score <= 15) return {
      title: "Alerta Roja: Fugas de Dinero",
      description: "Tu operación depende peligrosamente de la suerte y del talento individual. Estás perdiendo leads por falta de seguimiento y tus vendedores nuevos tardan demasiado en rentabilizar.",
      recommendation: "Recomendamos: Diagnóstico Comercial 360° urgente."
    };
    if (score <= 25) return {
      title: "Nivel Intermedio: Crecimiento con Dolor",
      description: "Tienes las herramientas, pero falta disciplina operativa. Probablemente tus datos están sucios y tu equipo pierde tiempo en tareas que deberían ser automáticas.",
      recommendation: "Recomendamos: Sales Playbooks & Tech para estandarizar."
    };
    return {
      title: "Nivel Avanzado: Máquina de Ventas",
      description: "¡Excelente! Tienes procesos maduros. El siguiente nivel es afinar la estrategia con datos avanzados y coaching de alto rendimiento para romper el techo de cristal.",
      recommendation: "Recomendamos: Fractional Sales Manager para mejora continua."
    };
  };

  const services = [
    {
      title: "Diagnóstico Comercial 360°",
      subtitle: "Personas, Procesos y Tecnología",
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      description: "No solo auditamos tu HubSpot, perfilamos a tu fuerza de ventas. Recomendamos las técnicas y metodologías específicas que mejor se amoldan a sus perfiles y objetivos.",
      price: "Inversión Única: 30 UF",
      features: ["Mystery Shopper & Escucha de Llamadas", "Auditoría Técnica HubSpot", "Evaluación de Perfiles de Venta", "Selección de Técnicas de Venta Ad hoc"],
      highlight: true
    },
    {
      title: "Sales Playbooks & Tech",
      subtitle: "Estandarización del Éxito",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      description: "Creamos el 'Manual de Venta' de tu empresa (guiones, objeciones) y lo dejamos automatizado en el CRM para que el equipo lo use.",
      price: "Desde 50 UF",
      features: ["Definición de Buyer Persona", "Guiones y Plantillas de Correo", "Configuración de Pipeline en CRM", "Capacitación y Onboarding"],
      highlight: false
    },
    {
      title: "Fractional Sales Manager",
      subtitle: "Liderazgo & Coaching Mensual",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      description: "Tu equipo necesita dirección, no solo soporte. Nos convertimos en tu Gerente de Ventas externo para asegurar resultados mes a mes.",
      price: "Planes desde 15 UF/mes",
      features: ["Revisión de Pipeline con Vendedores", "Coaching 1 a 1 y Roleplay", "Control de Calidad de Llamadas", "Gestión de Metas y KPIs"],
      highlight: false
    },
    {
      title: "Implementación Técnica CRM",
      subtitle: "Configuración & Migración",
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      description: "Te ayudamos a configurar tu CRM desde cero o a optimizar la instancia que ya tienes. Aseguramos que la tecnología trabaje para ti, no al revés.",
      price: "Cotización a medida",
      features: ["Configuración de Pipelines", "Automatización de Workflows", "Migración de Datos Segura", "Capacitación Técnica"],
      highlight: false
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-cyan-200">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-slate-900/95 py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO: Engranaje + Barras + Flecha */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SalesOps Logo">
                    <defs>
                        <linearGradient id="gearGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#22D3EE" />
                            <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                    </defs>
                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#06B6D4" strokeWidth="3" fill="none" strokeDasharray="4 2"/>
                    <path d="M24 8V4M44 24H40M24 44V40M4 24H8M38.1 38.1L35.3 35.3M9.9 9.9L12.7 12.7M38.1 9.9L35.3 12.7M9.9 38.1L12.7 35.3" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
                    <rect x="14" y="26" width="4" height="8" rx="1" fill="#22D3EE" />
                    <rect x="22" y="20" width="4" height="14" rx="1" fill="#06B6D4" />
                    <rect x="30" y="14" width="4" height="20" rx="1" fill="#1E3A8A" />
                    <path d="M12 30L22 20L30 24L40 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M34 10H40V16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="text-white">
              <span className="block font-bold text-xl leading-none tracking-tight">SalesOps</span>
              <span className="block text-cyan-400 text-[10px] tracking-[0.2em] font-bold uppercase mt-0.5">Consulting</span>
            </div>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-slate-300 hover:text-cyan-400 transition-colors" aria-label="Volver al inicio">
              <Home size={22} />
            </a>
            <a href="#quienes-somos" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Quiénes Somos</a>
            <a href="#problema" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Desafíos</a>
            <a href="#servicios" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Soluciones</a>
            <a href="#filosofia" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">Enfoque</a>
            <button onClick={() => setIsAssessmentOpen(true)} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-2 px-5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 text-sm">
              Auto-Evaluación
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Abrir menú">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 absolute w-full border-t border-slate-700 shadow-xl">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#inicio" onClick={toggleMenu} className="text-slate-300 hover:text-white flex items-center gap-2">
                <Home size={20} /> Inicio
              </a>
              <a href="#quienes-somos" onClick={toggleMenu} className="text-slate-300 hover:text-white">Quiénes Somos</a>
              <a href="#problema" onClick={toggleMenu} className="text-slate-300 hover:text-white">Desafíos</a>
              <a href="#servicios" onClick={toggleMenu} className="text-slate-300 hover:text-white">Soluciones</a>
              <a href="#filosofia" onClick={toggleMenu} className="text-slate-300 hover:text-white">Enfoque</a>
              <button onClick={() => { setIsAssessmentOpen(true); toggleMenu(); }} className="text-cyan-400 font-bold text-left">
                Hacer Auto-Evaluación
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* MODAL DE AUTOEVALUACION */}
      {isAssessmentOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-slate-900/90 backdrop-blur-sm transition-all" role="dialog" aria-modal="true">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in-up">
            <button onClick={resetAssessment} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" aria-label="Cerrar">
              <X size={24} />
            </button>
            
            <div className="p-8">
              {!showResult ? (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-cyan-600 uppercase tracking-wide">Diagnóstico Express</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">Pregunta {currentQuestion + 1} de {questions.length}</h3>
                    <div className="w-full bg-slate-100 h-2 rounded-full mt-4">
                      <div className="bg-cyan-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-slate-700 mb-6">{questions[currentQuestion].question}</h4>
                  
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleAnswer(option.points)}
                        className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 group-hover:text-slate-900 font-medium">{option.text}</span>
                          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-cyan-500" />
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6 ${score <= 15 ? 'bg-red-100 text-red-500' : score <= 25 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                     {score <= 15 ? <AlertTriangle size={40} /> : <Award size={40} />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{getResultFeedback().title}</h3>
                  <p className="text-slate-600 mb-6">{getResultFeedback().description}</p>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8 inline-block w-full">
                    <p className="font-bold text-slate-800 text-sm">{getResultFeedback().recommendation}</p>
                  </div>

                  <a href="#contacto" onClick={() => setIsAssessmentOpen(false)} className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
                    Agendar Revisión Gratuita
                  </a>
                  <button onClick={resetAssessment} className="mt-4 text-sm text-slate-500 hover:text-slate-800 underline">
                    Volver a empezar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <header id="inicio" className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Fondo Abstracto */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-800 to-slate-900 opacity-50 transform skew-x-12 translate-x-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Consultoría, Estrategia & Habilitación Comercial
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Tu Equipo de Ventas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Potenciado al Máximo</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-4xl leading-relaxed text-justify">
              Combinamos metodología de Coaching, Playbooks estratégicos y la potencia de HubSpot para eliminar la improvisación de tu equipo. Transformamos el talento individual en un sistema replicable que permite a tus vendedores cerrar negocios de forma ordenada, predecible y totalmente escalable mes a mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsAssessmentOpen(true)} className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all text-lg shadow-lg shadow-cyan-500/25">
                Evaluar a mi Equipo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a href="#servicios" className="inline-flex items-center justify-center bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 font-semibold py-4 px-8 rounded-lg transition-all text-lg">
                Ver Soluciones
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-500" />
                <span>Cultura de Alto Rendimiento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-500" />
                <span>Procesos Estandarizados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-500" />
                <span>Tecnología como Facilitador</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-wide mb-6">
                <Users className="w-4 h-4" />
                Quiénes Somos
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Arquitectos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Crecimiento Predecible</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed text-justify">
                SalesOps Consulting nació de una frustración compartida: ver empresas con excelentes productos fracasar por procesos comerciales desordenados. No somos teóricos; somos líderes activos que construyen los rieles por donde viaja el éxito comercial.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                Erradicar la improvisación en las ventas. Nuestra misión es transformar el caos operativo en máquinas de ingresos predecibles, empoderando a los equipos comerciales con la infraestructura, la tecnología y la estrategia de élite que necesitan para dominar sus mercados, ya sea en ventas corporativas (B2B), consumo masivo (B2C) o licitaciones públicas (B2G).
              </p>
            </article>

            <article className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                Ser el estándar de excelencia en Operaciones de Venta en Latinoamérica. Visualizamos un futuro donde ningún gran producto fracase por una mala ejecución comercial, y donde la ingeniería de ventas sea el corazón que impulsa la economía comercial de la región.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECCION PROBLEMA */}
      <section id="problema" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <span className="text-cyan-600 font-bold text-sm tracking-wider uppercase mb-2 block">Realidad Actual</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                ¿Tu equipo improvisa en lugar de ejecutar?
              </h2>
              
              <div className="space-y-6">
                {[
                  "Cada vendedor vende a su manera, sin un guión o proceso claro.",
                  "El talento se desperdicia en tareas administrativas y limpieza de datos.",
                  "HubSpot es visto como una carga burocrática, no como una ayuda.",
                  "El seguimiento a los leads es inconsistente y dependiente de la memoria."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-100 transition-colors">
                    <div className="min-w-[24px] mt-1 bg-white rounded-full p-1 shadow-sm">
                       <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-xl">
                 <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 mb-4 border-b border-slate-200 pb-4">
                         <div className="text-center">
                            <div className="w-12 h-12 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center text-slate-400">?</div>
                            <span className="text-xs text-slate-500">Antes</span>
                         </div>
                         <ArrowRight className="text-slate-300" />
                         <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-2 flex items-center justify-center text-cyan-600 border border-cyan-200"><CheckCircle size={20}/></div>
                            <span className="text-xs font-bold text-cyan-700">Después</span>
                         </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <p className="text-sm text-slate-700 font-medium">Playbook de Ventas Definido</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <p className="text-sm text-slate-700 font-medium">Automatización de Tareas Repetitivas</p>
                        </div>
                         <div className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <p className="text-sm text-slate-700 font-medium">Coaching basado en Datos Reales</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-8 bg-slate-900 rounded-2xl border-l-4 border-cyan-500 shadow-xl transform hover:scale-[1.01] transition-transform duration-300">
            <p className="italic text-slate-300 font-medium text-xl leading-relaxed text-center">
              "La tecnología por sí sola no vende. Necesitas personas capacitadas y alineadas estratégicamente ejecutando un proceso validado sobre una plataforma eficiente."
            </p>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Soluciones de Habilitación de Ventas</h2>
            <p className="text-slate-600">Transformamos tu operación combinando estrategia humana y eficiencia tecnológica.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={index} className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl relative flex flex-col ${service.highlight ? 'border-cyan-500 shadow-lg scale-105 z-10' : 'border-slate-100'}`}>
                {service.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white text-xs font-bold uppercase tracking-wide">
                    Punto de Partida
                  </div>
                )}
                <div className="mb-4 bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-100">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-cyan-600 font-medium text-xs mb-3">{service.subtitle}</p>
                <p className="text-slate-600 text-sm mb-4 flex-grow text-justify leading-snug">{service.description}</p>
                
                <div className="border-t border-slate-100 pt-4 mt-auto">
                   <div className="text-slate-900 font-bold text-base mb-3">{service.price}</div>
                   <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                           <ChevronRight className="w-3 h-3 text-cyan-500 mt-0.5 flex-shrink-0" />
                           {feature}
                        </li>
                      ))}
                   </ul>
                   <a href="#contacto" className={`block w-full text-center py-2.5 rounded-lg font-bold text-sm transition-colors ${service.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                     Me interesa
                   </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden shadow-lg">
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-slate-900">Nuestra Filosofía de Trabajo</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h4 className="text-cyan-600 font-bold mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5" /> Entendemos al Vendedor
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                            Sabemos que un CRM sin estrategia se convierte en burocracia, no en ventaja. Diseñamos cada proceso pensando obsesivamente en la experiencia del usuario final: tu vendedor. Eliminamos la fricción administrativa para que el talento de tu equipo se enfoque 100% en negociar, persuadir y cerrar ventas.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-cyan-600 font-bold mb-2 flex items-center gap-2">
                          <Briefcase className="w-5 h-5" /> Pragmatismo Puro
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed text-justify">
                            No somos consultores de escritorio que solo leen libros. Somos líderes comerciales activos gestionando equipos de alto rendimiento. Implementamos estrategias probadas en la trinchera diaria de las ventas, asegurando soluciones prácticas y resultados reales para tu industria.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Hablamos de tus resultados?</h2>
            <p className="text-slate-600">Agenda una sesión de exploración de 15 minutos para entender los desafíos de tu equipo comercial.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información */}
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Correo Electrónico</h4>
                        <p className="text-slate-600">contacto@salesopsconsulting.cl</p>
                        <p className="text-sm text-slate-500 mt-1">Respuesta en menos de 24 horas.</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                        <Globe className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Redes Sociales</h4>
                        <p className="text-slate-600 mb-2">Síguenos en nuestras redes</p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/salesops-consulting" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Teléfono</h4>
                        <p className="text-slate-600">+56 9 9062 0873</p>
                        <p className="text-sm text-slate-500 mt-1">Hablemos por WhatsApp.</p>
                    </div>
                </div>
            </div>

            {/* Formulario Integrado con HubSpot */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                {formStatus === 'success' ? (
                  <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-slate-600">Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-cyan-600 font-bold hover:underline">Volver al formulario</button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="firstname">Nombre</label>
                          <input 
                            type="text" 
                            id="firstname"
                            name="firstname" 
                            value={formData.firstname}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition" 
                            placeholder="Tu nombre" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="email">Correo Electrónico</label>
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition" 
                            placeholder="tu@empresa.com" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="company">Empresa</label>
                          <input 
                            type="text" 
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition" 
                            placeholder="Nombre de tu empresa" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-1" htmlFor="message">Principal desafío actual:</label>
                          <select 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition"
                          >
                              <option>Equipo desordenado / Sin proceso</option>
                              <option>Uso ineficiente del CRM</option>
                              <option>Falta de liderazgo/coaching</option>
                              <option>Necesito automatizar tareas</option>
                          </select>
                      </div>
                      
                      {formStatus === 'error' && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                          <AlertTriangle size={16} /> Hubo un error al enviar. Por favor intenta de nuevo.
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-all shadow-lg mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                          {formStatus === 'submitting' ? (
                            <> <Loader className="animate-spin" size={20} /> Enviando... </>
                          ) : (
                            <> <Send size={20} /> Solicitar Conversación </>
                          )}
                      </button>
                      <p className="text-xs text-center text-slate-500 mt-2">Tus datos están seguros. 0% Spam.</p>
                  </form>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left flex items-center gap-3">
                 <div className="w-6 h-6 relative flex items-center justify-center">
                    {/* Logo Pequeño Footer */}
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#06B6D4" strokeWidth="3" fill="none" strokeDasharray="4 2"/>
                        <path d="M24 8V4M44 24H40M24 44V40M4 24H8M38.1 38.1L35.3 35.3M9.9 9.9L12.7 12.7M38.1 9.9L35.3 12.7M9.9 38.1L12.7 35.3" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
                        <rect x="14" y="26" width="4" height="8" rx="1" fill="#22D3EE" />
                        <rect x="22" y="20" width="4" height="14" rx="1" fill="#06B6D4" />
                        <rect x="30" y="14" width="4" height="20" rx="1" fill="#1E3A8A" />
                        <path d="M12 30L22 20L30 24L40 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M34 10H40V16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-0 leading-none">SalesOps Consulting</h3>
                    <p className="text-xs mt-1">Potenciando equipos de venta B2B, B2C y B2G.</p>
                </div>
            </div>
            <div className="flex gap-6 text-sm font-medium">
                <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
                <a href="https://www.linkedin.com/company/salesops-consulting" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
                <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
            </div>
            <div className="text-xs text-slate-600">
                © {new Date().getFullYear()} SalesOps Consulting. Santiago, Chile.
            </div>
        </div>
      </footer>

    </div>
  );
};

export default App;

// Common

export const Common = {
    name : '박준영',
    birth : '1991.08.16',
    Year : 7,
    job : 'Solution Software Developor',
    keywords : [
        'C#', '.NET', 'WPF', 'EDA', 'CAD', 'PCB', 'Manufacturing'
    ]
}

export const Contacts = [
    {
        name: 'Github',
        link: 'https://github.com/jaywapp',
        icon: 'https://img.icons8.com/glyph-neue/256/github.png',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jaywapp16/',
        icon: 'https://img.icons8.com/ios-filled/256/linkedin.png',
    },
    {
        name: 'Blog',
        link: 'https://jaywapp.tistory.com/',
        icon: 'https://img.icons8.com/external-phatplus-solid-phatplus/256/external-blog-digital-service-phatplus-solid-phatplus.png',
    },
    {
        name: 'Portfolio',
        link: 'https://github.com/jaywapp/Projects',
        icon: 'https://img.icons8.com/ios-filled/256/portfolio.png',
    }
]

// Skills

export const Majors = [
    'C#', '.NET', 'WPF', 'Infragistics', 'Prism', 'Clipper',
]

export const Minors = [
    'React', 'JavaScript', 'Node.js', 'styled-components',
]

export const Nugets = [
    'ReactiveUI', 'SkiaSharp', 'CommandLineParser', 'OxyPlot', 'StyleCop.Analyzers',
    'NUnit', 'Newtonsoft.Json', 'MathNet', 'LiveCharts', 'AdonisUI', 'Selenium',
]

// Introduce

export const IntroTitle = '문제를 정의하고 문제에 집중하고 문제를 해결합니다.'

export const IntroDesc = [
    '6년 전, 전자 CAD 솔루션의 개발자로 커리어를 시작하였습니다. 전자 제품이 설계되고 생산되는 모든 과정에 대한 솔루션 제작에 참여하였습니다. 회로도 설계부터, PCB 설계, 제조 공정까지 모든 과정의 솔루션을 개발하며 경험을 쌓았습니다. 현재는 회로 검증 솔루션의 프로젝트 리더를 맡고 있습니다.',
    '솔루션 개발은 고객의 문제를 정의하고 문제를 해결하기 위한 과정입니다. 이 과정은 늘 어렵지만 문제 해결의 순간은 항상 달콤합니다. 저는 그 달콤함을 위해 항상 노력합니다. 저는 .NET 개발자 박준영입니다.',
]

// Experience

export const Expes = [
    {
        company : '펜타큐브',
        roles : [
            'Software Developer', 'Tech Leader', 'Project Leader',
        ],
        enterDate : '2017.03',
        resignDate : '',
        works : [
            '회로 설계 솔루션 프로젝트 리더 (CubicLDRC) / Project Leader ',
            'SMT 솔루션 설계 및 개발 (CubicSMT) / Tech Leader',
            'CAD 도면 로드 및 데이터 구조 구축 (ODB++, Gerber, Cadence Extracta, Neutral) / Developer',
            'CAD 도면 검증 솔루션 개발 ( 132종 ) / Developer, Project Managing',
            'FlexLM License 시스템 구축 / Developer',
        ],

        projects : [
            {
                name : 'LDRC Solution Reversion',
                desc : '회로 검증 솔루션 제품의 상용화를 위해 각 기능 및 UI/UX 구성을 재설계하였습니다.',
                date : '22/03 ~ 진행중',
                actions : [
                    '프로젝트 리더',
                    '사용자 UX/UI 설계',
                    '필요 UI Custom Component 개발',
                ],
                results : [],
                skills :[ 'C#', '.NET', 'WPF', 'MVVM', 'ReactiveUI', 'DependencyProperty', 'Schemetic', 'EDIF'],
            },
            {
                name : 'SkiaSharp CAD Canvas',
                desc : 'SkiaSharp 엔진을 기반으로 2D Canvas를 신규 개발하였습니다.',
                date : '22/03 ~ 22/06 (4개월)',
                actions : [
                    'SkiaSharp 기반 CAD Canvas 개발',
                    'SkiaSharp 기반 Geometry 구조 개발',
                ],
                results : [
                    '기존의 3D OpenGL 기반의 Canvas를 2D 기반의 SkiaCanvas로 교체하여 프로그램 부하감소',
                    '일부 사양이 낮은 고객 장비를 포함하여 모든 고객이 정상 사용',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'SkiaSharp', 'PCB', 'Gerber', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Gerber, Neutral Importing',
                desc : 'Gerber, Neutral 파일을 분석하여 CAD 데이터 구조를 구축하였습니다.',
                date : '21/06 ~ 21/08 (3개월)',
                actions : [
                    'Gerber 파일 분석 및 로드 기능 개발 (RS-274X)',
                    'Neutral 파일 분석 및 로드 기능 개발 (Mentro Graphics)',
                ],
                results : [
                    '프로그램 로드 가능 파일 형식 증가',
                    'SMT 부문 도면 로드 가능 (사업 영역 확대)',
                ],
                skills :['C#', '.NET', 'WPF', 'Gerber', 'Neutral', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'SMT Solution',
                desc : '제조 공정을 위한 자동화 솔루션을 개발하였습니다.',
                date : '21/03 ~ 21/06 (4개월)',
                actions : [
                    '프로젝트 테크 리더',
                    '제조 공정 솔루션(SMT)에 대한 기능 조사',
                    'IoC기반 솔루션 구조 설계',
                    '솔루션의 기본적인 구조 구축',
                ],
                results : [
                    '회사에서 없던 신규 솔루션 개발 (사업 영역 확대)',
                    '사내 최고 성과급',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'Plugin', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Pentacube DFE, DFM Rule pack',
                desc : '자사 공용 DFE, DFM package를 개발하여 상용화하였습니다.',
                date : '20/10 ~ 21/02 (4개월)',
                actions : [
                    '공용 DFM Rule 개발',
                    '공용 DFE Rule 개발',
                ],
                results : [
                    '공용 DFM, DFE Rule Set 상품화',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE'],
            },
            {
                name : 'Strip DRC & Interfacing',
                desc : 'SK Hynix의 연배열 구조를 구축하고 그에 대한 DRC Rule을 개발하였습니다.',
                date : '20/03 ~ 20/08 (6개월)',
                actions : [
                    'DRC 개발 (15종)',
                    '연배열 구조의 도면을 Importing할 수 있는 데이터 구조 구축',
                    '단수 도면에 대한 작업 단위를 복수의 도면에서 작업이 가능하도록 솔루션 자료구조 및 모듈 구조 개선 (Cadence)',
                ],
                results : [
                    '연배열 가능 솔루션 구축 (영업, 마케팅 범위 확대)',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : '현대 모비스 업무 자동화',
                desc : '현대 자동차 계열에서 사용하는 HKMC에 대한 자동화 검증 솔루션을 개발하였습니다.',
                date : '19/05 ~ 20/02 (10개월)',
                actions : [
                    '현대자동차 HKMC 자동화 (46종)',
                    'PCB 도면 비교 솔루션 제공',
                ],
                results : [
                    '회사가 자동차 분야 EDA 산업에 진출할 수 있는 기회가 됨.',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Cadence Extracta Importing',
                desc : 'Cadence Extracta를 이용하여 CAD 정보를 추출하고 이에 대한 CAD 데이터 구조를 구축하였습니다.',
                date : '19/03 ~ 19/04 (2개월)',
                actions : [
                    'Cadence Extracta를 이용한 도면 정보 추출',
                    '추출된 정보와 자사 CAD 데이터 구조 구축과 인터페이싱',
                ],
                results : [
                    '기존 ODB++로 변환하여 Importing을 직접하여 도면 Importing 속도 개선 (50% 속도 감축)'
                ],
                skills :['C#', '.NET', 'WPF', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : 'SK Hynix Module 업무 자동화',
                desc : 'SK Hynix Module팀의 도면 검증 프로세스를 자동화하였습니다.',
                date : '18/03 ~ 18/06 (4개월)',
                actions : [
                    '고객과 직접 소통하며 프로젝트 관리',
                    'PCB 체크리스트 자동화 (DFM 13종)',                    
                ],
                results : [
                    '고객 MBO 고평가 유도 (이에 대한 Thanks 메일을 받음)',
                    '타 부서 고객에 대한 연결 및 계약',
                    '현재까지 현업 프로세스에서 정착하여 사용 중 (매년 유지보수 계약 연장)',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Samsung NW DFM / DFE',
                desc : 'Samsung NW 사업부의 도면 검증 프로세스를 자동화하였습니다.',
                date : '17.10 ~ 18.03 (6개월)',
                actions : [
                    'PCB 체크리스트 자동화',
                    'DFM 6종, DFE 24종 개발',
                    '기존 배포 제품 유지 보수 및 개선',
                ],
                results : [
                    '검증 시간 단축 (10분 이상 ⇒ 2분 이내)',
                    '고객이 육안 확인하던 모든 체크리스트 항목에 대해 자동화 완료',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE',],
            },
            {
                name : 'FlexLM License System',
                desc : 'FlexLM License API를 자사 프로그램에 모듈화하여 적용하고 이를 발급 및 배포할 수 있도록 시스템을 구축하였습니다.',
                date : '17.06 ~ 17.12 (6개월)',
                actions : [
                    '.NET 기반 FlexLM Module 생성',
                    '발급권자 전용 License 발급 유틸리티 개발',
                    'License 발급 프로세스 적용 및 안정화',                    
                ],
                results : [
                    '자사 모든 프로그램 License 시스템 적용',
                    'License 발급 프로세스 안정화',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'FlexLM '],
            },
        ],

        performances : [
            {
                name : 'SkiaSharp기반 Canvas, Geometry 구조 구축',
                desc : 'OpenGL Based Canvas가 고객의 장비에서 정상 동작하지 않는 이슈가 있었습니다. Geometry 정보가 제한적인 제조 공정 고객의 상황에 맞게 SkiaCanvas를 이용하여 재설계 및 배포하였습니다.',
                actions : [
                    'SkiaSharp 기반 Geometry 구조 구축 (Line, Arc, Circle, Rectange, Polygon)',
                    'SkiaSharp Canvas 적용',
                ],
            },
            {
                name : 'SMT 솔루션 구조 설계 및 개발',
                desc : 'PCB 제조 공정 솔루션 프로젝트에 테크 리더 역할을 맡은 경험이 있습니다. 솔루션의 아키텍쳐를 설계하고 설계를 바탕으로 솔루션을 개발하였습니다. 현재 삼성 네트워크 사업부, 무선 사업부, 가전 사업부에서 솔루션을 사용하여 PCB 제조 업무를 진행하고 있습니다.',
                actions : [
                    '고객 요구사항에 따른 소프트웨어 구조 설계',
                    'IoC (Prism) 기반 모듈 설계', 
                    'MVVM 패턴을 이용한 기능별 View 개발',
                    'Facade 패턴을 적용한 Controller 모듈 개발',
                ],
            },
            {
                name : 'Gerber, Neutral 데이터 구조 구축',
                desc : '제조 공정에서는 CAD 파일을 직접 사용하지 않고 양산시 업체와의 데이터 교류를 위해 Gerber 파일과 Neutral 파일로 나누어 사용합니다. 당시 Gerber와 Neutral 파일에 대한 인터페이스 모듈이 없어 신규 데이터 구조를 구축하였습니다. 이때 Gerber에는 형상 정보, Neutral에는 CAD 요소에 대한 정보가 나뉘어 있어 두 도면을 하나의 데이터 구조로 병합할 수 있도록 구현하였습니다.',
                actions : [
                    'Gerber Importing 기능 개발 (RS-274X)',
                    'Neutral Importing 기능 개발 (Mentor Graphics)',
                ],
            },
            {
                name : 'Plugin 시스템 구축',
                desc : '하나의 솔루션에 대해 고객사, 부서, 권한에 따라 별도의 기능을 사용하고 싶다는 요구 사항이 있었습니다. 이를 보다 효율적으로 운용하기 위해 Reflection을 이용, Plugin 구조를 구축하여 고객마다 프로젝트를 별도로 유지할 수 있도록 하였습니다. 결과로 목적에 따라 별도의 프로젝트를 운용할 수 있게 되었습니다.',
                actions : [
                    'Plugin Import 구조 구축',
                    '자사 Plugin API 개발',
                ],
            },
            {
                name : 'DFM Rule 프로젝트',
                desc : 'SK 하이닉스와 DFM Rule 개발 프로젝트를 직접 진행하였습니다. 고객의 요구 사항을 직접 만나 듣고 문제를 정의하고, 문제 해결 방법을 정의하고 개발까지 진행하였습니다. 그 결과 고객의 당해년도 MBO 고평가를 이끌어 내었고 직접 Thanks mail을 받은 경험이 있습니다.',
                actions : [
                ],
            },
            {
                name : '고성능 DRC Rule 개발',
                desc : '고성능의 CAD 검증 기능을 개발하였습니다. 대표적인 예로 CAD NET 배선의 Coupling 검증에 대한 요청이 있었습니다. 기존의 자동화 방법에는 단순하게 두 선분의 거리를 측정하는 방법이 있었는데 이를 사용하지 않고 사영 기하학을 이용한 사영 선분을 구하는 알고리즘을 개발하였습니다. 이를 통해 고객은 더 정밀한 결과를 얻을 수 있었습니다.',
                actions : [
                    '기하학을 이용한 도면 검증 알고리즘 개발',
                    '기하학 연산 속도 최적화 (100000개 이상)' 
                ],
            },
            {
                name : 'FlexLM License 시스템 구축',
                desc : 'Serial Key를 발급하여 제공되던 License 시스템을 FlexLM License API를 적용하여 고객 환경에서 Floating Licence 서비스를 이용할 수 있도록 하였고, 사내 License 발급 과정을 개선하였습니다.',
                actions : [
                    '자사 FlexLM Deamon 생성',
                    'FlexLM API를 적용한 .NET License Checking Module 개발',
                    '비개발자 발급권자를 위한 FlexLM License 발급기 생성',
                ],
            }
        ]
    }


]
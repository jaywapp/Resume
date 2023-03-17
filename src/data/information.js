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
        performances : [
            {
                name : 'SkiaSharp기반 Canvas, Geometry 구조 구축',
                desc : 'OpenGL Based Canvas가 고객의 장비에서 정상 동작하지 않는 이슈가 있었습니다. Geometry 정보가 제한적인 제조 공정 고객의 상황에 맞게 SkiaCanvas를 이용하여 재설계 및 배포하였습니다.',
                summary : [
                    'SkiaSharp 기반 Geometry 구조 구축 (Line, Arc, Circle, Rectange, Polygon)',
                    'SkiaSharp Canvas 적용',
                ],
            },
            {
                name : 'SMT 솔루션 구조 설계 및 개발',
                desc : 'PCB 제조 공정 솔루션 프로젝트에 테크 리더 역할을 맡은 경험이 있습니다. 솔루션의 아키텍쳐를 설계하고 설계를 바탕으로 솔루션을 개발하였습니다. 현재 삼성 네트워크 사업부, 무선 사업부, 가전 사업부에서 솔루션을 사용하여 PCB 제조 업무를 진행하고 있습니다.',
                summary : [
                    '고객 요구사항에 따른 소프트웨어 구조 설계',
                    'IoC (Prism) 기반 모듈 설계', 
                    'MVVM 패턴을 이용한 기능별 View 개발',
                    'Facade 패턴을 적용한 Controller 모듈 개발',
                ],
            },
            {
                name : 'Gerber, Neutral 데이터 구조 구축',
                desc : '제조 공정에서는 CAD 파일을 직접 사용하지 않고 양산시 업체와의 데이터 교류를 위해 Gerber 파일과 Neutral 파일로 나누어 사용합니다. 당시 Gerber와 Neutral 파일에 대한 인터페이스 모듈이 없어 신규 데이터 구조를 구축하였습니다. 이때 Gerber에는 형상 정보, Neutral에는 CAD 요소에 대한 정보가 나뉘어 있어 두 도면을 하나의 데이터 구조로 병합할 수 있도록 구현하였습니다.',
                summary : [
                    'Gerber Importing 기능 개발 (RS-274X)',
                    'Neutral Importing 기능 개발 (Mentor Graphics)',
                ],
            },
            {
                name : 'Plugin 시스템 구축',
                desc : '하나의 솔루션에 대해 고객사, 부서, 권한에 따라 별도의 기능을 사용하고 싶다는 요구 사항이 있었습니다. 이를 보다 효율적으로 운용하기 위해 Reflection을 이용, Plugin 구조를 구축하여 고객마다 프로젝트를 별도로 유지할 수 있도록 하였습니다. 결과로 목적에 따라 별도의 프로젝트를 운용할 수 있게 되었습니다.',
                summary : [
                    'Plugin Import 구조 구축',
                    '자사 Plugin API 개발',
                ],
            },
            {
                name : 'DFM Rule 프로젝트',
                desc : 'SK 하이닉스와 DFM Rule 개발 프로젝트를 직접 진행하였습니다. 고객의 요구 사항을 직접 만나 듣고 문제를 정의하고, 문제 해결 방법을 정의하고 개발까지 진행하였습니다. 그 결과 고객의 당해년도 MBO 고평가를 이끌어 내었고 직접 Thanks mail을 받은 경험이 있습니다.',
                summary : [
                ],
            },
            {
                name : '고성능 DRC Rule 개발',
                desc : '고성능의 CAD 검증 기능을 개발하였습니다. 대표적인 예로 CAD NET 배선의 Coupling 검증에 대한 요청이 있었습니다. 기존의 자동화 방법에는 단순하게 두 선분의 거리를 측정하는 방법이 있었는데 이를 사용하지 않고 사영 기하학을 이용한 사영 선분을 구하는 알고리즘을 개발하였습니다. 이를 통해 고객은 더 정밀한 결과를 얻을 수 있었습니다.',
                summary : [
                    '기하학을 이용한 도면 검증 알고리즘 개발',
                    '기하학 연산 속도 최적화 (100000개 이상)' 
                ],
            },
            {
                name : 'FlexLM License 시스템 구축',
                desc : 'Serial Key를 발급하여 제공되던 License 시스템을 FlexLM License API를 적용하여 고객 환경에서 Floating Licence 서비스를 이용할 수 있도록 하였고, 사내 License 발급 과정을 개선하였습니다.',
                summary : [
                    '자사 FlexLM Deamon 생성',
                    'FlexLM API를 적용한 .NET License Checking Module 개발',
                    '비개발자 발급권자를 위한 FlexLM License 발급기 생성',
                ],
            }
        ]
    }


]
import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Master',
    url: '/base',
    iconComponent: { name: 'cil-pencil' },
    children: [
      {
        name: 'Class Wise Fee Heads',
        url: '/master/class_wise_fee_heads',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Exp. Fee Heads',
        url: '/master/FeeHeadMaster',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Create Staff ',
        url: '/base/CreateStaff ',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Class Master',
        url: '/base/ClassMaster',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Branch Master',
        url: '/base/BranchMaster',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Junior',
    url: '/base',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: ' Junior College Admission',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Admission Register',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Admission Register Update ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Student Promote',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior College TC',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior College Old TC',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior General Receipt',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior College Manual Examination',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior College Examination Fees ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Recipt cancellation ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Recipt cancellation report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Receipt Reprint ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Admission Cancel',
        url: '',
        icon: 'nav-icon-bullet'
      }

    ]
  },
  {
    name: 'Senior',
    url: '/base',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Senior Prospectus ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior College Admission ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Senior College Admission',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Admission Register',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Admission Register Update ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Student Promote',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Admission register Cancel',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior College Manual Examination',
        url: '',
        icon: 'nav-icon-bullet'
      },
      
      {
        name: 'Senior College TC',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior College Old TC',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior General Receipt',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior College Examination Fee',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Recipt cancellation ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Recipt cancellation report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Senior Receipt Reprint ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Senior Student Migrate TC',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Senior Old Student Migrate TC',
        url: '',
        icon: 'nav-icon-bullet'
      }

    ]
  },
  {
    name: 'PG',
    url: '/PG',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: ' PG College Admission ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'PG Admission Register',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'PG Admission Register Update',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'PG General Receipt',
        url: '',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Fees Report',
    url: '/feesReport',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'DCR Report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Fee Head Wise Report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Student Due Report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Senior Admission Report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Admission Report ',
        url: '',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Student Reports',
    url: '/feesReport',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Admission Registration Report  ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Bonafide Print  ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' MIS Report For Jr & Sr',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register General Report ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: ' Subject Wise Report  ',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'TC Issued And Admission Cancelled Report ',
        url: '',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Installment',
    url: '',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Detail reports',
    url: '',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Senior Detail Report',
        url: '',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Junior Detail Report',
        url: '',
        icon: 'nav-icon-bullet'
      }
    ]
  },





















  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Carousel',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Collapse',
        url: '/base/collapse',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'List Group',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pagination',
        url: '/base/pagination',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Spinners',
        url: '/base/spinners',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];

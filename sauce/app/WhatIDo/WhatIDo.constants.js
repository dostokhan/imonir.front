/* eslint-disable import/prefer-default-export */

let keyStarts = 0;
const autoKey = () => {
  keyStarts += 1;
  return keyStarts;
};

export const PROJECTS = [
  {
    key: autoKey(),
    date: new Date('2017-04-01'),
    title: {
      text: 'Shikhai Live',
      link: 'https://www.shikhai.live',
    },
    skills: ['React', 'Redux', 'Webpack', 'Fabricjs', 'Strophe', 'Jitsi'],
    image: '/static/images/portfolio/shikhai_x300.jpg',
    description: 'Live, Interactive Tutoring/Mentoring Web App.',
    bullets: [
      'ReactJS, Redux based frontend.',
      'Live, Interactive Tutoring/Mentoring Web App.',
      'HTML5 Canvas and Fabric.js library was used to develop the Interactive Classroom for writing free hand and other objects(shapes, images etc) on the whiteboard.',
    ],
  },
  {
    key: autoKey(),
    date: new Date('2015-03-04'),
    title: {
      text: 'RingId',
      link: 'https://www.ringid.com',
    },
    skills: ['Angularjs', 'Gruntjs', 'Bash Scripting', 'Devops'],
    image: '/static/images/portfolio/ringid_x300.jpg',
    description: 'Social Network with chat, pages, news and entertainment channels.',
    bullets: [
      'AngularJS based SPA.',
      'Social Network with chat, pages, news and entertainment channels.',
      'Worked on api response(UDP packets from websocket connection) parsing library.',
      'Improved code quality and deployment flow with Eslint, Git flow.',
      'Built and maintained build tools using Grunt and Node.js plugins, Bash.',
    ],
  },
  {
    key: autoKey(),
    date: new Date('2012-11-15'),
    title: {
      text: 'Phil Hedries',
      link: 'https://www.philhendrieshow.com/',
    },
    skills: ['Joomla', 'Paypal', 'Amazon Web Services', 'Squarespace', 'PHP Scripting'],
    image: '',
    description: 'Phil Hendries Website Migration to Joomla from Squarespace.',
    bullets: [
      'Created Migration script to export 5k+ articles, comments, categories, users, membership etc from Squarespace to Joomla Website.',
      'Wrote test scripts to test migration accuracy.',
      'Built Custom extensions for AWS paid contents.',
    ],
  },
  {
    key: autoKey(),
    date: new Date('2012-01-19'),
    title: {
      text: 'Crosspoint Dentistry',
      link: 'https://www.crosspointdentistry.com/',
    },
    skills: ['Html', 'Css', 'PSD->HTML', 'JOOMLA'],
    image: '/static/images/portfolio/crosspoint-dentistry_x300.jpg',
    description: 'Full website development using Joomla from Provided PSD.',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-05-21'),
    title: {
      text: 'Crank Text',
      link: 'http://cranktexts.com/',
    },
    image: '/static/images/portfolio/cranktexts_x300.jpg',
    skills: ['html', 'css', 'jquery'],
    description: `Crank Text submission form and preview templates work.
    used html and css along with jQuery Sortable Plugin`,
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2011-10-05'),
    title: {
      text: 'Syteline User Network(SUN)',
      link: 'https://sytelineusernetwork.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'CB Extension'],
    image: '',
    description: 'Paid Membership. Custom extensions. Event Management',
    bullets: [
      'Built Website with Joomla CMS.',
      'Extensions were customized for Membership and Payments.',
      'Custom Extension was built for searching members with geolocation and other parameters.',
      'A User migration script was created to import Member users from csv file.',
    ],
  },


  {
    key: autoKey(),
    date: new Date('2011-10-26'),
    title: {
      text: 'IDG Marketing & Graphics',
      link: 'http://www.idgbuffalo.com/',
    },
    skills: ['Joomla', 'Html', 'CSS'],
    image: '/static/images/portfolio/idgbuffalo_x300.jpg',
    description: 'Marketing firm website',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-08-31'),
    title: {
      text: 'Babysitter Marketplace',
      link: '',
    },
    skills: ['Joomla', 'Html', 'CSS'],
    image: '/static/images/portfolio/babysitter_x300.jpg',
    description: 'Babysitter marketplace with member(babysitters) management',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-08-03'),
    title: {
      text: 'Buffalo Spine and Sports Institute',
      link: 'https://www.buffspine.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Joomla Template'],
    image: '/static/images/portfolio/buffspine_x300.jpg',
    description: 'Buffspine Institute Website',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-09-07'),
    title: {
      text: 'Buffalo City Mission',
      link: 'https://www.buffalocitymission.org/',
    },
    skills: ['Joomla', 'Joomla Template', 'Html', 'CSS'],
    image: '/static/images/portfolio/citymission_x300.jpg',
    description: 'Buffalo City Mission Website with Donation capabilities',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-07-20'),
    title: {
      text: 'Vitamin Blue',
      link: 'http://vitaminblue.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Virtuemart', 'Joomla Template'],
    image: '',
    description: 'Vitaminblue Surf equipments E-Commerce website',
    bullets: [],
  },
  {
    key: autoKey(),
    date: new Date('2012-03-29'),
    title: {
      text: 'Kensington Assisted Living',
      link: 'https://thekensingtonwhiteplains.com/',
    },
    skills: ['Joomla', 'Html', 'CSS', 'Joomla Template'],
    image: '/static/images/portfolio/kensington_x300.jpg',
    description: '',
    bullets: [],
  },


].sort((a, b) => (a.date > b.date ? -1 : (a.date < b.date ? 1 : 0)));

/* eslint-enable import/prefer-default-export */

export const CLOSE_KEY_CODE = 'Escape';

export const LABEL_ARR = [
  { id: 0, priority: 'low', color: 'blue' },
  { id: 1, priority: 'medium', color: 'pink' },
  { id: 2, priority: 'high', color: 'green' },
  { id: 3, priority: 'without priority', color: 'gray' },
];

export const ICONS_ARRAY = [
  { id: 0, name: 'project', label: 'project' },
  { id: 1, name: 'star', label: 'star' },
  { id: 2, name: 'loading', label: 'loading' },
  { id: 3, name: 'puzzle-piece', label: 'puzzle-piece' },
  { id: 4, name: 'container', label: 'container' },
  { id: 5, name: 'lightning', label: 'lightning' },
  { id: 6, name: 'colors', label: 'colors' },
  { id: 7, name: 'hexagon', label: 'hexagon' },
];

export const BACKDROP_TRANSITION = {
  initial: { opacity: 0, transition: { type: 'spring' } },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MODAL_TRANSITION = {
  initial: {
    y: '-100vh',
    transition: { type: 'spring' },
  },
  isOpen: { y: '0' },
  exit: {
    top: '100vh',
    transition: { duration: 5 },
  },
};

export const TOASTER = {
  style: {
    border: '2px solid #bedbb0',
    backgroundColor: '#1f1f1f',
    color: '#fff',
    textAlign: 'center',
  },
  position: 'top-center',
  duration: 2000,
};

export const PROGRESS_BAR_COLORS = [
  '#dddddd9b',
  '#ff1900',
  '#f6b44d',
  '#99dab2',
  '#008d52',
];

export const DEFAULT_BACKGROUND_ID = '65e476ee9e0727c033dddb93';

export const MAX_DESCR_LENGTH = 80;

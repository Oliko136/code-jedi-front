export const CLOSE_KEY_CODE = 'Escape';

export const PRIORITY_LIST = [
  { priority: 'low', color: '#8FA1D0' },
  { priority: 'medium', color: '#E09CB5' },
  { priority: 'high', color: '#BEDBB0' },
  { priority: 'without', color: 'var(--btn-rad-without)' },
];

export const ICONS_ARRAY = [
  { id: 0, name: 'icon-board-fourCircles-1', label: 'project' },
  { id: 1, name: 'icon-board-star-2', label: 'star' },
  { id: 2, name: 'icon-board-loading-3', label: 'loading' },
  { id: 3, name: 'icon-board-puzzle-4', label: 'puzzle-piece' },
  { id: 4, name: 'icon-board-box-5', label: 'container' },
  { id: 5, name: 'icon-board-lightning-6', label: 'lightning' },
  { id: 6, name: 'icon-board-colors-7', label: 'colors' },
  { id: 7, name: 'icon-board-hexagon-8', label: 'hexagon' },
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

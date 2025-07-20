import { FileSystemItem, DesktopIcon } from '../types';

export const fileSystem: FileSystemItem[] = [
  {
    id: 'important-txt',
    name: 'IMPORTANT.txt',
    type: 'file',
    icon: '📄',
    path: '/desktop/IMPORTANT.txt',
    content: ' MR SHARMA loves you :)'
  },
  {
    id: 'MRS SHARMA-secret',
    name: "MRS SHARMA's Secret Folder",
    type: 'folder',
    icon: '💕',
    path: '/desktop/MRS SHARMA-secret',
    children: [
      {
        id: 'MRS SHARMA-love-note',
        name: 'i love you:3',
        type: 'file',
        icon: '💌',
        path: '/desktop/MRS SHARMA-secret/i love pinak:3',
        content: 'Dear MR SHARMA,\n\nYou mean the world to me! Your smile lights up my day and your laugh is music to my ears.\n\nForever yours,\nMRS SHARMA 💕'
      }
    ]
  },
  {
    id: 'MR SHARMA-secret',
    name: "MR SHARMA's Secret Folder",
    type: 'folder',
    icon: '💖',
    path: '/desktop/MR SHARMA-secret',
    children: [
      {
        id: 'MR SHARMA-love-note',
        name: 'i love MRS SHARMA:3',
        type: 'file',
        icon: '💌',
        path: '/desktop/MR SHARMA-secret/i love MRS SHARMA:3',
        content: 'My dearest MRS SHARMA,\n\nYou are my sunshine, my happiness, and my everything. I fall in love with you more each day. Thank you for being the most amazing person in my life.\n\nWith all my love,\nMR SHARMA 💖'
      }
    ]
  },
];

export const desktopIcons: DesktopIcon[] = [
  {
    id: 'important-txt',
    name: 'IMPORTANT.txt',
    icon: '📄',
    position: { x: 600, y: 100 }, // Top center area with spacing
    type: 'file',
    action: 'open-file',
    data: { fileId: 'important-txt' }
  },
  {
    id: 'yuzy-profile', // dont change this path
    name: 'MRS SHARMA',
    icon: '/media/MRS SHARMA.jpg',
    position: { x: 50, y: 50 },
    type: 'app',
    action: 'popup',
    data: { message: 'i OWN MR SHARMA' }
  },
  {
    id: 'MRS SHARMA-secret-folder',
    name: "MRS SHARMA's Secret Folder",
    icon: '💕',
    position: { x: 50, y: -180 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'MRS SHARMA-secret' }
  },
  {
    id: 'assad-profile', // Dont change this path
    name: 'MR SHARMA',
    icon: '/media/MR SHARMA.jpg',
    position: { x: 180, y: 50 },
    type: 'app',
    action: 'popup',
    data: { message: 'i belong to MRS SHARMA' }
  },
  {
    id: 'MR SHARMA-secret-folder',
    name: "MR SHARMA's Secret Folder",
    icon: '💖',
    position: { x: 180, y: -180 }, // Calculated from bottom - moved higher
    type: 'folder',
    action: 'open-folder',
    data: { folderId: 'MR SHARMA-secret' }
  }
];
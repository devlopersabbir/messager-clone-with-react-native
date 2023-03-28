export type TFooterItem = {
  id?: number;
  name: string;
  iconName: any;
};

export type TMessage = {
  id?: number;
  avater?: string;
  name: string;
  message?: string;
  lastSeen?: string;
  unseenMessage?: number;
};

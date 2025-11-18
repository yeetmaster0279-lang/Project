import { useCallback, useReducer } from 'react';

export type MenuItemType = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
};

type State = {
  items: MenuItemType[];
};

type Action =
  | { type: 'set_all'; items: MenuItemType[] }
  | { type: 'add'; item: MenuItemType }
  | { type: 'update'; id: string; patch: Partial<MenuItemType> }
  | { type: 'remove'; id: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set_all':
      return { items: action.items };
    case 'add':
      return { items: [action.item, ...state.items] }; // prepend or push as needed
    case 'update':
      return {
        items: state.items.map((it) => (it.id === action.id ? { ...it, ...action.patch } : it)),
      };
    case 'remove':
      return { items: state.items.filter((it) => it.id !== action.id) };
    default:
      return state;
  }
}

export function useMenu(initial: MenuItemType[] = []) {
  const [state, dispatch] = useReducer(reducer, { items: initial });

  const setAll = useCallback((items: MenuItemType[]) => dispatch({ type: 'set_all', items }), []);
  const add = useCallback((item: MenuItemType) => dispatch({ type: 'add', item }), []);
  const update = useCallback((id: string, patch: Partial<MenuItemType>) => dispatch({ type: 'update', id, patch }), []);
  const remove = useCallback((id: string) => dispatch({ type: 'remove', id }), []);

  return {
    items: state.items,
    setAll,
    add,
    update,
    remove,
  };
}
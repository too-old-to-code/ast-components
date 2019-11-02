import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import Sortable from 'sortablejs';

export const SortableList = props => {
  const sortable = useRef();
  const [list, setList] = useState(['3', '2', '1']);

  useEffect(() => {
    let s = new Sortable(sortable.current, {
      handle: '.drag-handle',
      onSort: a => {
        [].forEach.call(sortable.current.children, el => {
          el.removeAttribute('style');
        });
      },
      store: {
        get(a) {
          return list;
        },
        set(a) {
          setList(a.toArray());
        },
      },
    });
    return () => s.destroy();
  });

  return <div ref={sortable}>{props.children}</div>;
};

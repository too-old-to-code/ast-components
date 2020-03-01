import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as theme1 } from '../../src/themes/theme-1';
import { theme as theme2 } from '../../src/themes/theme-2';

import { MsMenuItem } from '../../src/menu-components';
import { ExampleMsInputGroupPanel, MyEditor } from '../form-components/ms-input-panel.stories';
import { SortableList } from '../../src/app';
export default {
  title: 'MenuComponents.MsMenuItem',
};
// data-id={obj.id}
// id={obj.id}
// category={obj.category}
// key={obj.id}
export const ExampleMsMenuItem = () => (
  <ThemeProvider theme={theme1}>
    <SortableList>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="1" id="1" key="1" />}>
        cat
      </MsMenuItem>
      <MsMenuItem
        category="sentence"
        content={<ExampleMsInputGroupPanel data-id="2" id="2" key="2" />}
      >
        The cat bit the dog very hard, to the point that the poor dog whelped and ran away as fast
        as his little legs would carry him.
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="3" id="3" key="3" />}>
        bird
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="4" id="4" key="4" />}>
        elephant
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="5" id="5" key="5" />}>
        squirrel
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="6" id="6" key="6" />}>
        lion
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="7" id="7" key="7" />}>
        cheetah
      </MsMenuItem>
      <MsMenuItem category="word" content={<ExampleMsInputGroupPanel data-id="8" id="8" key="8" />}>
        rhino
      </MsMenuItem>
      <MsMenuItem category="lesson" content={<MyEditor data-id="8" id="8" key="8" />}>
        pronouns
      </MsMenuItem>
    </SortableList>
  </ThemeProvider>
);

import React, { useState } from 'react';
import { NavMenuComplete } from '../../src/organisms/nav-menu-complete';
import { ThemeProvider } from 'styled-components';
import { NavbarDropdown, BubbleDropdown } from '../../src/atoms/navbar-dropdown';
import { AstSidebar } from '../../src/molecules/sliding-sidebar';
import { Bubble } from '../../src/atoms/bubble';
import Gravatar from 'react-gravatar';
import logo from '../../static/favicon.ico';
import { AstShadowBox } from '../../src/atoms/shadow-box';
import { AstPlainBox } from '../../src/atoms/plain-box';
import { AstDraggableBox } from '../../src/molecules/draggable-box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SortableList } from '../../src/molecules/sortable-list';
import { SortableList } from '../../src/app';
import { FlexBox } from '../../src/app';
import { AstMainArea } from '../../src/app';
import { AstModalConductor } from '../../src/app';
import { AstModalWrapper } from '../../src/app';
import { Button } from '../../src/app';
import { AstButtonSpacer } from '../../src/app';
import { AstDropdown } from '../../src/atoms/dropdown';
import { theme } from '../../src/themes/theme-1';
import { Panel } from '../../src/app';
export default {
  title: 'Organisms.Test',
};

export const Test = () => {
  const [modal, changeModal] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <AstModalConductor isModalActive={modal}>
        {modal => {
          switch (modal) {
            case 'a': {
              return (
                <AstModalWrapper
                  heading="Delete section"
                  icon="warning"
                  footer={
                    <AstButtonSpacer
                      leftButton={
                        <Button danger onClick={() => changeModal(null)}>
                          Yes, delete.
                        </Button>
                      }
                      rightButton={
                        <Button default onClick={() => changeModal(null)}>
                          Cancel
                        </Button>
                      }
                    />
                  }
                >
                  Deleting a section is an irreversible action. The section and all its child
                  components will be permenantly erased. Are you sure you want to do this?
                </AstModalWrapper>
              );
            }
            case 'b': {
              return (
                <AstModalWrapper
                  heading="Heading for second case"
                  footer={
                    <Button info onClick={() => changeModal(null)}>
                      Cancel
                    </Button>
                  }
                >
                  <span>
                    Here is the text that is to go into the modal. Hopefully, this should work in or
                    out of a span element.
                  </span>
                </AstModalWrapper>
              );
            }
            default:
              return <AstModalWrapper></AstModalWrapper>;
          }
        }}
      </AstModalConductor>

      <div>
        <Bubble>hello</Bubble>
        {<AstSidebar></AstSidebar>}
        <NavMenuComplete
          burgerStyle="collapse"
          logo={<img style={{ height: '100%' }} src={logo} />}
          desktopItems={
            <React.Fragment>
              <span>About</span>
              <span>Home</span>
              <AstDropdown
                trigger={
                  <Gravatar
                    email="andrewt51@hotmail.com"
                    size={35}
                    style={{ borderRadius: '50%', border: '2px solid white' }}
                  />
                }
              >
                <p>Option 1</p>
                <p>Option 2</p>
                <p>Option 3</p>
              </AstDropdown>
            </React.Fragment>
          }
          mobileItems={
            <React.Fragment>
              <a href="#">About</a>
              <div>Home</div>
            </React.Fragment>
          }
        />
        <AstMainArea>
          <button onClick={() => changeModal('b')}>default Modal</button>
          <button onClick={() => changeModal('a')}>modal a</button>
          <SortableList>
            {[
              { id: 1, name: 'cat', category: 'word' },
              { id: 2, name: 'dog', category: 'word' },
              { id: 4, name: 'dog', category: 'word' },
              { id: 5, name: 'dog', category: 'word' },
              { id: 6, name: 'dog', category: 'word' },
              { id: 7, name: 'dog', category: 'word' },
              { id: 8, name: 'dog', category: 'word' },
              { id: 9, name: 'dog', category: 'word' },
              { id: 10, name: 'dog', category: 'word' },
              { id: 11, name: 'dog', category: 'word' },
              {
                id: 3,
                name:
                  'The cat bit the dog very hard, to the point that the poor dog whelped and ran away as fast as his little legs would carry him.',
                category: 'sentence',
              },
            ].map(obj => {
              return (
                <AstDraggableBox
                  data-id={obj.id}
                  id={obj.id}
                  category={obj.category}
                  key={obj.id}
                  lightish
                >
                  {obj.name} {obj.id}
                </AstDraggableBox>
              );
            })}
          </SortableList>
        </AstMainArea>
      </div>
    </ThemeProvider>
  );
};

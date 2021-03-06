/*
Copyright 2019 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { fakeArticleModel, fakeCategoryModel } from '../../../models/fake';
import { css } from '../../utilx';
import { TitleCell } from './components';
import { ARTICLE_TABLE_STYLES } from './styles';

faker.seed(456);

const category = fakeCategoryModel({label: 'ChuChu TV Nursery Rhymes & Kids Songs', unmoderatedCount: 2});
const category2 = fakeCategoryModel({label: 'World', unmoderatedCount: 2});

const article1 = fakeArticleModel({
  title: 'IMF chief Christine Lagarde warns Britain on Brexit: ‘It will never be as good as it is now’',
  categoryId: category.id,
});
const article2 = fakeArticleModel({
  categoryId: null,
  url: null,
});
const article3 = fakeArticleModel({
  categoryId: category2.id,
  sourceCreatedAt: null,
  url: null,
});
const article4 = fakeArticleModel({
  categoryId: null,
  sourceCreatedAt: null,
});

storiesOf('TableComponents', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Title cell', () => {
    const cellStyle = ARTICLE_TABLE_STYLES.dataCell;
    return (
      <div {...css(cellStyle, ARTICLE_TABLE_STYLES.dataBody)}>
        <div {...css(cellStyle, ARTICLE_TABLE_STYLES.textCell)}>
          <TitleCell category={category} article={article1} link={'#'}/>
        </div>
        <div {...css(cellStyle, ARTICLE_TABLE_STYLES.textCell)}>
            <TitleCell article={article2} link={'#'}/>
        </div>
        <div {...css(cellStyle, ARTICLE_TABLE_STYLES.textCell)}>
          <TitleCell category={category2} article={article3} link={'#'}/>
        </div>
        <div {...css(cellStyle, ARTICLE_TABLE_STYLES.textCell)}>
          <TitleCell article={article4} link={'#'}/>
        </div>
      </div>
    );
  })
;

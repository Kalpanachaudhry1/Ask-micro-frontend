import { Input, Typography } from 'antd';
import React, { FC, memo } from 'react';

const { Title } = Typography;

const Ask: FC<{}> = () => (
    <>
        <Title>Ask</Title>
        <Input
          placeholder='Search'
        />
    </>
);

export default memo(Ask);

import { Avatar, Button, Card, Popover } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';

const ProjectPage = () => {
  const tonToggleLike = useCallback(() => {}, []);
  const onToggleLike = useCallback(() => {}, []);
  const onToggleCommentForm = useCallback(() => {}, []);

  return (
    <div style={{ width: '300' }}>
      <Card
        style={{ marginBottom: 20 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
        // extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="test"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ marginBottom: 20 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
        // extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="test"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ marginBottom: 20 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
        // extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="test"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default ProjectPage;

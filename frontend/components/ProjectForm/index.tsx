import { Avatar, Button, Card, Popover } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';

import React, { useCallback } from 'react';

const ProjectForm = () => {
  const tonToggleLike = useCallback(() => {}, []);
  const onToggleLike = useCallback(() => {}, []);
  const onToggleCommentForm = useCallback(() => {}, []);

  const liked = true;

  return (
    <div>
      <Card
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" onClick={onToggleLike} key="heart" />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleCommentForm} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {/* {id && id === post.User?.id && (
                  <>
                    <Button type="primary">수정</Button>
                    <Button
                      onClick={onRemovePost}
                      type="primary"
                      style={{ background: 'red' }}
                      loading={removePostLoading}
                    >
                      삭제
                    </Button>
                  </>
                )} */}
                <Button>신고</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        // extra={id && <FollowButton post={post} />}
      >
        <Card.Meta avatar={<Avatar>test</Avatar>} title="test" />
      </Card>
    </div>
  );
};

export default ProjectForm;

import React, { FC, useCallback, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Breadcrumb, Layout, Menu as AntMenu } from 'antd';
import { FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import gravatarUrl from 'gravatar-url';
import 'antd/dist/antd.css';

import { LogoDiv, ProfileImg, RightMenu } from './styles';
import ProjectForm from '@components/ProjectForm';
import CreateProjectModal from '@components/CreateProjectModal';
import User from '@pages/User';
import UserProfile from '@components/UserProfile';
import { IUser } from '@services/users/model';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = AntMenu;

const Main: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const onClickProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const onClickProject = useCallback((e: any) => {
    console.log('test');
  }, []);

  const onClickUser = useCallback((e: any) => {}, []);

  const userData: IUser = {
    id: 1,
    email: 'chaosts0981@gmail.com',
    nickname: 'song',
  };

  const tempUserData = [
    {
      id: 1,
      email: 'chaosts0981@gmail.com',
      nickname: 'songsongsong',
    },
    {
      id: 2,
      email: 'chaosts09@gmail.com',
      nickname: 'song0',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', marginTop: '15px', marginLeft: '10px' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <LogoDiv />
        <AntMenu theme="dark" mode="inline">
          <AntMenu.Item key="1" onClick={onClickProject} title="Project" icon={<PieChartOutlined />}>
            Project
          </AntMenu.Item>
          <SubMenu title="User" icon={<UserOutlined />} key="2">
            {tempUserData.map((cur) => {
              return (
                <AntMenu.Item
                  key={cur.id.toString().concat('user')}
                  onClick={onClickUser}
                  title="User"
                  style={{ paddingLeft: 24 }}
                >
                  <img src={gravatarUrl(cur.email, { size: 30, default: 'retro' })} alt={cur.nickname} />
                  <Link key={cur.id.toString().concat('userlink')} to={`/main/user/${cur.id}`}>
                    <span style={{ marginLeft: 10 }}>{cur.nickname}</span>
                  </Link>
                </AntMenu.Item>
              );
            })}
          </SubMenu>
          <SubMenu title="Team" icon={<TeamOutlined />} key="3">
            <AntMenu.Item key="3-team" onClick={onClickUser} title="Team">
              <Link key="teamlink" to={`/main/team/2`}>
                <span style={{ marginLeft: 10 }}>Ant Project</span>
              </Link>
            </AntMenu.Item>
          </SubMenu>
          <SubMenu title="File" icon={<FileOutlined />} key={4}></SubMenu>
        </AntMenu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Switch>
            <Route path="/main/user/:id" component={User} />
            <Route path="/main/team/:id" />
          </Switch>
          {/* <ProjectForm /> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}> Created by Song</Footer>
      </Layout>
      <RightMenu>
        <span onClick={onClickProfile}>
          <ProfileImg src={gravatarUrl(userData.email, { size: 26, default: 'retro' })} alt={userData.nickname} />
        </span>
      </RightMenu>
      <CreateProjectModal />
      {showProfile && <UserProfile showMenu={showProfile} onCloseModal={onClickProfile} data={userData} />}
    </Layout>
  );
};

export default Main;

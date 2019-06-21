import React from 'react';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd'
import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout

function DropMenu() {
	return (
		<Menu>
			<Menu.Item>
				<a href="">1</a>
			</Menu.Item>
			<Menu.Item>
				<a href="">2</a>
			</Menu.Item>
		</Menu>
	)
}
class PageLayout extends React.Component {
	render() {
		return (
			<Layout>
				<Header style={{
					color: '#fff',
					textAlign: "center",
					fontWeight: "bold"
				}}>
					<Row>
						<Col span={7}>
							reacrt + Antd 实践
                        </Col>
						<Col span={10}>
							<Input placeholder="请输入你想要的....">

							</Input>
						</Col>
						<Col span={7}>
							<Avatar style={{
								backgroundColor: '#666',
								marginRight: 20
							}} icon="user"></Avatar>
							<Dropdown overlay={DropMenu}>
								<span>
									Hi<Icon type="down"></Icon>
								</span>
							</Dropdown>
						</Col>
					</Row>
				</Header>
				<Layout>
					<Sider>
						<Menu style={{
							width: 256,
							height: '96vh',
							overflow: 'auto',
							minWidth: 256
						}}
							defaultOpenKeys={['sub1']}
							mode="inline">
							<Menu.SubMenu title={
								<span><Icon type="smile-0"></Icon>部分UI组件实战</span>
							} key="sub1">
								<Menu.Item key="sub-1-1">
									<Link to={"table"}>表格</Link>
								</Menu.Item>
								<Menu.Item key="sub-1-2">
									<Link to={"label"}>标签页</Link>
								</Menu.Item>
							</Menu.SubMenu>
						</Menu>
					</Sider>
					<Content>
						{this.props.children}
					</Content>
				</Layout>
				<Footer>
					Footer
                </Footer>
			</Layout>
		)
	}
}
export default PageLayout
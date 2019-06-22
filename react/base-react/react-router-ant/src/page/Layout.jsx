import React from 'react';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon} from 'antd'
import { Link, Route } from 'react-router-dom';
import Table from './table/index'
const { Header, Footer, Sider, Content } = Layout
function Label(){
	return (
		<div>
			Label
		</div>
	)
}
function Post(props){
	const {match} = props
	console.log(props)
	return (
		<div>
			id: {match.params.id}
		</div>
	)
}
function DropMenu() {
	return (
		<Menu>
			<Menu.Item>
				1
			</Menu.Item>
			<Menu.Item>
				2
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
									<Link to={{
											pathname:'/table',
											search: '?type=all&a=1'
										}}>表格</Link>
								</Menu.Item>
								<Menu.Item key="sub-1-2">
									<Link to="/label">标签页</Link>
								</Menu.Item>
								<Menu.Item key="sub-1-3">
									<Link to="/post/abcdefg">文章详情</Link>
								</Menu.Item>
							</Menu.SubMenu>
						</Menu>
					</Sider>
					<Content style={{marginLeft: '5%'}}>
						<Route path='/table' component={Table}></Route>
						<Route path='/label' component={Label}></Route>
						<Route path='/post/:id' component={Post}></Route>
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
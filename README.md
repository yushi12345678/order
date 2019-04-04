react实现订单列表及评价功能
==========================
1.使用create-react-app脚手架创建react项目基本结构。
-----------------------------------------------

2.根据页面进行组件划分：主要包含了三个组件，分别是Header,OrderItem,OrderList。
--------------------------------------------------------------------------

3在脚手架生成的App组件中引用了Header，OrderList组件。在Header组件中声明了订单头部。在OrderList组件中引入OrderItem组件，并使用fetch这个API模拟从服务器
-----------------------------------------------------------------------------------------------------------------------------------------------
端获取数据，将获取到的数据设置到组件的state当中。
--------------------------------------------

4.在OrderItem组件的render函数中将订单列表展现出来。在renderEditArea（）函数中将评价功能实现，并在提交评价信息时借助props调用父组件传过来的提交函数来完
-----------------------------------------------------------------------------------------------------------------------------------------------
成整个评价的流程
--------------
总结：该项目功能并不强大，但它用使用了react框架虚拟DOM的机制，同时在敲代码的过程中，加深了对react框架的认识。
-----------------------------------------------------------------------------------------------------

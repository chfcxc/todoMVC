;(function () {
	const todos = [
		{
			id:1,
			title:'吃饭',
			done:false
		},
		{
			id:2,
			title:'吃饭2',
			done:true
		},
		{
			id:3,
			title:'吃饭3',
			done:false
		},
		{
			id:4,
			title:'吃饭4',
			done:false
		}
	];
	new Vue({
		el:'#todoapp',
		data:{
			hello:'Todos',
			todos,
			inputText:'',
			currentEdit: null,
			backTitle:null
		},
		methods:{
			addTodo(e){
				// if(e.keyCode)
				// console.log('enter');
				// const todos = this.todos;
				const {inputText,todos} = this

				// 非空检验
				if(inputText.trim().length === 0){
					return
				}

				// 获取唯一的id
				const lastItem = todos[todos.length - 1]
				const id = lastItem ? lastItem.id + 1 : 1

				// 添加到数组中
				todos.push({
					id:5,
					title:this.inputText,
					done:false
				})

				// 清空文本框
				this.inputText = ''
			},

			removeTodo(index){
				// console.log(1);
				this.todos.splice(index,1);
			},

			getEditing(item){
				// console.log('cc')
				this.currentEdit = item
				// 备份title
				this.backTitle = item.title
			},

			// 回车或失去焦点时保存编辑
			saveEdit(item,index){
				// console.log('保存编辑')
				if(item.title.trim().length === 0){
					// 执行删除操作
					this.todos.splice(index,1)
				}else{
					this.currentEdit = null
				}
			},

			//esc 取消编辑
			// 取消编辑的时候同时触发了失去焦点的事件
			cancelEdit(){
				// console.log('取消')

				this.currentEdit.title = this.backTitle

				// 去除编辑样式
				this.currentEdit = null
			}
		}
	})

})()




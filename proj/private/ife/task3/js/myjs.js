/*
 * @Author: wt
 * @Date: 2020-06-02 21:20:12
 * @LastEditTime: 2020-06-08 21:30:55
 * @Description: 
 */

function moren() {

    var arr1 = [
        {
            name: "默认分类",
            id: 0,
            child: [0],
        },
        {
            name: "百度IFE项目",
            id: 1,
            child: [1, 2]
        },
        {
            name: "new",
            id: 2,
            child: [3]
        }
    ]
    var arr2 = [
        {
            father: 0,
            name: "默认子分类",
            id: 0,
            child: []
        },
        {
            father: 1,
            name: "task0001",
            id: 1,
            child: [0, 1, 2, 4]
        },
        {
            father: 1,
            name: "task0002",
            id: 2,
            child: [3]
        },
        {
            father: 2,
            name: "test",
            id: 3,
            child: [5]
        }
    ]
    var arr3 = [
        {
            father: 1,
            name: "to-do 1",
            Date: "2015-05-28",
            id: 0,
            content: "完成 to-do 1 的代码编码工作",
            checked: true
        },
        {
            father: 1,
            name: "to-do 2",
            Date: "2015-05-29",
            id: 1,
            content: "完成 to-do 2 的代码编码工作",
            checked: false
        },
        {
            father: 1,
            name: "to-do 3",
            Date: "2015-05-30",
            id: 2,
            content: "完成 to-do 3 的代码编码工作",
            checked: true
        },
        {
            father: 2,
            name: "to-do 4",
            Date: "2015-06-29",
            id: 3,
            content: "完成 to-do 4 的代码编码工作",
            checked: false
        },
        {
            father: 1,
            name: "to-do 5",
            Date: "2015-05-29",
            id: 4,
            content: "完成 to-do 5 的代码编码工作",
            checked: false
        },
        {
            father: 3,
            name: "to-do 6",
            Date: "2015-07-29",
            id: 5,
            content: "完成 to-do 6 的代码编码工作",
            checked: false
        }
    ]
    localStorage.setItem("todoCate", JSON.stringify(arr1))
    localStorage.setItem("todoChildCate", JSON.stringify(arr2))
    localStorage.setItem("todoTask", JSON.stringify(arr3))
}
// data 和 arr 在下面弄混了，修改起来比较麻烦，一起定义吧
function init() {
    data1 = JSON.parse(localStorage.getItem("todoCate"))
    data2 = JSON.parse(localStorage.getItem("todoChildCate"))
    data3 = JSON.parse(localStorage.getItem("todoTask"))
    arr1 = JSON.parse(localStorage.getItem("todoCate"))
    arr2 = JSON.parse(localStorage.getItem("todoChildCate"))
    arr3 = JSON.parse(localStorage.getItem("todoTask"))
}
// 渲染左栏
function cateRender() {
    var str = ''
    var count = 0
    // 渲染所有任务右边的 数字
    var allTask = document.querySelector(".listHeader")
    allTask.innerHTML = `<div><i class="fa fa-bars" aria-hidden="true"></i> 所有任务(${data3.length})</div>
    <p><i class="fa fa-bars" aria-hidden="true"></i> 分类列表</p>`
    data1.map((item1, index1) => {
        // 为了让 父分类()内的数值等于子分类()内数值之和。 多用了个 str1
        var str1 = ''
        count = 0
        data2.map((item2, index2) => {
            if (item2.father == item1.id) {
                count += item2.child.length
                str1 += `<div class="listTask" onclick="eleFocus()" data-id="${item2.id}"><i class="fa fa-file-text" aria-hidden="true"></i> ${item2.name} (${item2.child.length})<i class="fa fa-minus-circle" aria-hidden="true" onclick=del(this)></i></div>`
            }
        })
        str += `<div class="listName">
        <div class="listNameHeader" data-id="${item1.id}" data-num="${item1.id}"><i class="fa fa-folder-open" aria-hidden="true"></i> ${item1.name} (${count})<i class="fa fa-minus-circle" aria-hidden="true" onclick=del(this)></i></div>`
        str += str1 + '</div>'
    })
    listContent.innerHTML = str
    document.querySelector(".listHeader div").addEventListener("click", function () {
        midShow()
    })  
    document.querySelector(".listHeader div").addEventListener("click", function (){
        eleFocus()
    })  
    document.querySelector(".listHeader div").addEventListener("click", function (){
        childCateRender()
    })  
    ;[...document.querySelectorAll(".listNameHeader")].map((item, index) => {
        item.addEventListener("click",function () {
            eleFocus('',1)
        })
        item.addEventListener("click",function () {
            childCateRender(undefined, item.dataset.id)
        })
    })
    ;[...document.querySelectorAll(".listTask")].map((item, index) => {
        item.addEventListener("click", function () {
            // console.log(index)
            childCateRender(item.dataset.id)
        })
    })
    console.log(focusedEle, focusedFa)
    eleFocus(focusedEle, focusedFa)
    // eleFocus(undefined, undefined)
}
// 可传入父亲节点（即左侧分类栏被选中的）的 id 值
// 渲染中栏
function childCateRender(t, fa) {
    var str = ''
    var data = [...data3]
    // 按日期排序
    data.sort((a, b) => new Date(a.Date) - new Date(b.Date))
    data.map((item, index) => {
        // 如果传入参数，就判断是否是需要的 task
        if (t != undefined) {
            if (item.father == t) {
          //加上之后同日期的日期栏会丢失      
        //   if (index == 0 || item.Date != data[index - 1].Date) {
                    // console.log(data[index - 1])
                    str += `<div class="statusDate ${item.checked}" data-status="${item.checked}" data-fa="${item.father}">
                    <div class="statusDateHeader">${item.Date}</div>`
          //加上之后同日期的日期栏会丢失      
        //   }
                str += `<div class="dateTask ${item.checked ? 'done' : ''}" onclick="taskRender(${item.id})" data-fa="${item.father}">${item.name}</div>`
                if (index + 1 == data.length || item.Date != data[index + 1].Date) {
                    str += `</div>`
                }
            }
        } else { // 如果没传入参数，task 全都显示出来
            if (index == 0 || item.Date != data[index - 1].Date) {
                // console.log(data[index - 1])
                str += `<div class="statusDate ${item.checked}" data-status="${item.checked}" data-fa="${item.father}">
                <div class="statusDateHeader">${item.Date}</div>`
            }
            str += `<div class="dateTask ${item.checked ? 'done' : ''}" onclick="taskRender(${item.id})"  data-fa="${item.father}">${item.name}</div>`
            if (index + 1 == data.length || item.Date != data[index + 1].Date) {
                // str += `<div class="newTask" onclick="creatTask()"><i class="fa fa-plus-square" aria-hidden="true"></i> 新增任务</div>
                // </div>`
                str += `</div>`
            }
        }
    })
    // str += '<div class="newTask" onclick="creatTask()"><i class="fa fa-plus-square" aria-hidden="true"></i> 新增任务</div>'
    statusContent.innerHTML = str
        if (fa) {
            var faE = [...arr1[fa].child]
            faE.push("]")
            faE.unshift("[")
            var faE = faE.join("")
            var re = new RegExp(faE)
            console.log(re)
            console.log(re.test('2'))
            console.log(document.querySelectorAll(".statusDate"))
            ;[...document.querySelectorAll(".dateTask")].map((item) => {
                if(!item.parentNode.count) {
                    item.parentNode.count = item.parentNode.children.length
                }
                item.parentNode.style.display = "block"
                if (!re.test(item.dataset.fa)) {
                // if (fa.child.indexOf(item.dataset.fa) == -1) {
                    console.log(item)
                    item.style.display = "none"
                    item.parentNode.count--
                    if(item.parentNode.count == 1) {
                        item.parentNode.style.display = "none"
                    }
                }
            })
        }

        var obj = {}
    ;[...document.querySelectorAll(".statusDateHeader")].map((item, index) => {
        if (!obj[item.innerText]) {
            obj[item.innerText] = 1
        } else {
            item.style.display = "none"
        }
    })
    newTask = document.querySelector(".newTask")
    ;[...document.querySelectorAll(".dateTask")].map((item, index) => {
        item.addEventListener("click", function () {
            console.log(123)
            var ccSed = document.querySelector(".childCateSelected")
            if(ccSed) {
                ccSed.classList.remove("childCateSelected")
            }
            event.target.classList.add("childCateSelected")
        })
    })
    // 模拟鼠标事件，选中第一个 ChildCate
    var eve = document.createEvent("MouseEvents")
    eve.initEvent("click", true, true)
    setTimeout(function () {
        document.querySelector(".dateTask").dispatchEvent(eve)
        console.log(document.querySelector(".statusDate"))
        document.querySelector(".statusDate .dateTask").dispatchEvent(eve)
        var bb = document.querySelectorAll(".statusDate")
        console.log(bb)
        for (let i = 0; i < bb.length; i++) {
            if(bb[i].style.display == 'block') {
                bb[i].children[1].dispatchEvent(eve)
                break
            }
        }
    },0)
}
// 渲染右栏 传入要渲染的 task 的id
function taskRender(n) {
    var str = ''
    var data = [...data3]
    if (n != undefined) {
        data.map((item, index) => {
            if (item.id == n) {
                str = `<div class="detailHeader">
                <div class="detailName">
                    <div class="taskName">任务标题：${item.name}</div>
                    <div class="confirm" onclick="checkChange(${item.id})"><i class="fa fa-check" aria-hidden="true"></i></div>
                    <div class="write" onclick="creatTask(${item.id})"><i class="fa fa-pencil-square" aria-hidden="true"></i></div>
                </div>
                <div class="detailDate">任务日期：${item.Date}</div>
            </div>
            <div class="detailContent">${item.content}</div>`
            }
        })
    } else {
        str = `<div class="detailHeader">
        <div class="detailName">
            <div class="taskName">任务标题：</div>
        </div>
        <div class="detailDate">任务日期：</div>
    </div>
    <div class="detailContent"></div>`
    }
    todoDetail.innerHTML = str
    var confirm = document.querySelector(".confirm")
}
// 修改右栏的完成状态
function checkChange(n) {
    if (!arr3[n].checked) {
        var flag = confirm("确定要将任务设置为完成状态吗")
        arr3[n].checked = flag
        storage()
        childCateRender()
        taskRender(n)
    } else {
        alert("任务已经完成了哦~")
    }
}
// 渲染 添加分类的遮罩层
function maskRender() {
    var str = `<label for="hasFaEle">选择父节点：</label><select name="fa" id="faNode">
    <option value="">无</option>`
    var data = [...data1]
    data.map((item, index) => {
        str += `<option value='${item.id}'>${item.name}</option>`
    })
    str += '</select>'
    faSelect.innerHTML = str
    // 渲染完毕重新获取一下 faNode，否则无法取到当前 value
    faNode = document.querySelector("#faNode")
}
// 存读 localStorage 
function storage() {
    localStorage.setItem("todoCate", JSON.stringify(arr1))
    localStorage.setItem("todoChildCate", JSON.stringify(arr2))
    localStorage.setItem("todoTask", JSON.stringify(arr3))
    init()
    // data1 = JSON.parse(localStorage.getItem("todoCate"))
    // data2 = JSON.parse(localStorage.getItem("todoChildCate"))
    // data3 = JSON.parse(localStorage.getItem("todoTask"))
    // arr1 = JSON.parse(localStorage.getItem("todoCate"))
    // arr2 = JSON.parse(localStorage.getItem("todoChildCate"))
    // arr3 = JSON.parse(localStorage.getItem("todoTask"))
}
// 点击右栏变为新建页面，参数可以传入要编辑的 task 的 id
function creatTask(n) {
    selected = document.querySelector(".selected")
    if(selected == document.querySelector(".listHeader div")) {
        selected = document.querySelector(".listTask")
    }
    if (n == undefined) {
        if(selected.classList.contains("listTask")) {
            todoDetail.innerHTML = `<div class="detailCreatTable">
                <div class="detailCreatName detailHeader">
                    <div class="detailName addTaskName">
                        <label for="taskCreatName">任务标题：</label>
                        <input type="text" class="taskCreatName" id="taskCreatName" placeholder="在此输入任务标题">
                    </div>
                    <div class="detailDate">
                        <label for="detailCreatDate">任务日期：</label>
                        <input type="text" class="detailCreatDate" id="detailCreatDate" placeholder="在此输入任务日期">
                    </div>
                    <div class="detailContent">
                        <textarea class="detailCreatContent" id="detailCreatContent" placeholder="在此输入任务内容"></textarea>
                    </div>
                    <div class="creatBtn">
                        <div class="saveBtn" onclick="creatSave(${selected.dataset.id})">保存</div>
                        <div class="cancelBtn" onclick="taskRender()">取消</div>
                    </div>
                </div>
            </div>`
        } else {
            var str
            str = `<div class="detailCreatTable">
            <div class="detailCreatName detailHeader">
                <div class="detailName addTaskName">
                    <label for="taskCreatName">任务标题：</label>
                    <input type="text" class="taskCreatName" id="taskCreatName" placeholder="在此输入任务标题">
                </div>
                <div class="detailDate">
                    <label for="detailCreatDate">任务日期：</label>
                    <input type="text" class="detailCreatDate" id="detailCreatDate" placeholder="在此输入任务日期">
                </div>
                <div class="detailContent">
                    <textarea class="detailCreatContent" id="detailCreatContent" placeholder="在此输入任务内容"></textarea>
                </div>
                <div class="creatBtn">`
                if(selected.nextSibling) {
                    str += `
                    <div class="saveBtn" onclick="creatSave(${selected.nextSibling.dataset.id})">保存</div>
                    <div class="cancelBtn" onclick="taskRender()">取消</div>
                </div>
            </div>
        </div>`
                } else {
                    str += `
                        <div class="saveBtn" onclick="alert('必须先指定子分类的名字！')">保存</div>
                        <div class="cancelBtn" onclick="taskRender()">取消</div>
                    </div>
                </div>
            </div>`
                }
            todoDetail.innerHTML = str
            
        }
    } else {
        todoDetail.innerHTML = `<div class="detailCreatTable">
            <div class="detailCreatName detailHeader">
                <div class="detailName addTaskName">
                    <label for="taskCreatName">任务标题：</label>
                    <input type="text" class="taskCreatName" id="taskCreatName" placeholder="在此输入任务标题" value="${arr3[n].name}">
                </div>
                <div class="detailDate">
                    <label for="detailCreatDate">任务日期：</label>
                    <input type="text" class="detailCreatDate" id="detailCreatDate" placeholder="在此输入任务日期" value="${arr3[n].Date}">
                </div>
                <div class="detailContent">
                    <textarea class="detailCreatContent" id="detailCreatContent" placeholder="在此输入任务内容" value="">${arr3[n].content}</textarea>
                </div>
                <div class="creatBtn">
                    <div class="saveBtn" onclick="creatSave(${arr3[n].father}, true, ${n})">保存</div>
                    <div class="cancelBtn" onclick="taskRender()">取消</div>
                </div>
            </div>
        </div>`
    }
}
// fa 是分类的父元素, edit 如果传入 true，则表示修改自身而不是新建, n 表示要编辑的 task 的 id
function creatSave(fa, edit, n) {
    var taskCreatName = document.querySelector("#taskCreatName"),
        detailCreatDate = document.querySelector("#detailCreatDate"),
        detailCreatContent = document.querySelector("#detailCreatContent")
    if (/^20\d{2}\-((0[1-9])|(1[0-2]))\-((0[1-9])|(1[0-9])|(2[0-9])|(30))$/.test(detailCreatDate.value)) {
        if (!edit) {
            arr3.push({
                father: fa || 0,
                name: taskCreatName.value,
                Date: detailCreatDate.value,
                id: arr3[arr3.length - 1].id + 1,
                content: detailCreatContent.value,
                checked: false
            })
            // 把新添加的元素的 father 指向正确的分类
            console.log(arr3[arr3.length - 1].father)
            arr2.map((item, index) => {
                if(item.id == arr3[arr3.length - 1].father) {
                    item.child.push(arr3[arr3.length - 1].id)
                }
            })
            // arr2[arr3[arr3.length - 1].father].child.push(arr3[arr3.length - 1].id)
            storage()
            cateRender()
            childCateRender()
            taskRender(arr3.length - 1)
        } else {
            arr3[n].name = taskCreatName.value
            arr3[n].Date = detailCreatDate.value
            arr3[n].content = detailCreatContent.value
            storage()
            cateRender()
            childCateRender()
            taskRender(n)
        }
    } else {
        var warnText = '<div style="color:red;margin:10px;margin-bottom:0px;">"这个日期根本不存在！"</div>'
        document.querySelector(".detailContent").insertAdjacentHTML("beforeBegin", warnText)
    }
}
// 传入被点击的按钮, event.target 好像也行吧，不管了
function midShow(ele, status) {
    document.getElementsByClassName("active")[0].classList.remove("active")
    if (ele) {
        ele.classList.add("active")
    } else {
        document.querySelector(".statusHeader div:first-child").classList.add("active")
    }
    var midBarList = document.getElementsByClassName("statusDate")
        ;[...midBarList].map((item, index) => {
            if (status != undefined) {
                if (!item.classList.contains(status)) {
                    item.style.display = "none"
                } else {
                    item.style.display = "block"
                }
            } else {
                item.style.display = "block"
            }
        })
}
// 不能取名为 focus()，这是 js 保留字
function eleFocus(eleId, faId) {
    console.log('may')
    if (!faId) {
        if(eleId) {
            document.querySelector(`[data-id='${eleId}']`).classList.add("selected")
        } else {
            if (!document.querySelector(".selected")) {
                document.querySelector(".listHeader div").classList.add("selected")
            } else {
                document.querySelector(".selected").classList.remove("selected")
                if(event.target.tagName == "I") {
                    event.target.parentNode.classList.add("selected")
                }else {

                    event.target.classList.add("selected")
                }
            }
        }
        // 如果不设置这个， F12 就会报错，虽然显示上无所谓
        // 但设置了这个，每次新增 Task 之后 selected 无法保持，因为设置了这个 focusedEle、focusedFa 就会被清空无法记录当前被选中的分类列表
        // 不能很轻松的解决，难受。。
        // if(eleId == undefined && faId == undefined) {
        //     focusedEle = undefined
        //     focusedFa = undefined
        // } else {
            focusedEle = document.querySelector(".selected").dataset.id || 0
            focusedFa = document.querySelector(".selected").parentNode.children[0].dataset.id || 0
        // }
    } else {
        var fa = document.querySelector(`[data-num='${faId}']`).parentNode.querySelectorAll(`[data-id='${eleId}']`)
        if(!fa[0]) {
            // document.querySelector(".listHeader div").classList.add("selected")
            // focusedEle = document.querySelector(".selected").dataset.id || 0
            // focusedFa = document.querySelector(".selected").parentNode.children[0].dataset.id || 0
            // return
        }
        console.log(fa)
        if(eleId) {
            console.log(fa)
            fa[fa.length - 1].classList.add("selected")
        } else {
            console.log(213)
            if (!document.querySelector(".selected")) {
                document.querySelector(".listHeader div").classList.add("selected")
            } else {
                document.querySelector(".selected").classList.remove("selected")
                console.log(event.target)
                event.target.classList.add("selected")
            }
        }
        focusedEle = document.querySelector(".selected").dataset.id || 0
        focusedFa = document.querySelector(".selected").parentNode.children[0].dataset.id || 0
    }
    console.log(eleId, faId)

}
// 点击删除键执行的操作
function del(ele) {
    arr1 = [...arr1]
    arr2 = [...arr2]
    arr3 = [...arr3]
    var id
    // var data2 = [...data2]
    // var data3 = [...data3]

    console.log(focusedEle, focusedFa)
    if (ele.parentNode.classList.contains("listNameHeader")) {
        // ele.parentNode.dataset.id == "1"
        id = ele.parentNode.dataset.id
        arr1.splice(id, 1)
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i].father == id) {
                for (let j = 0; j < arr3.length; j++) {
                    if (arr3[j].father == arr2[i].id) {
                        arr3.splice(j, 1)
                        j--
                    }
                }
                arr2.splice(i, 1)
                i--
            }
        }
        storage()
        // childCateRender()
        setTimeout(function () {
            cateRender()
        }, 50)
        // cateRender()
        setTimeout(function () {
            childCateRender()
        },10)
        taskRender()
    } else if (ele.parentNode.classList.contains("listTask")) {
        id = ele.parentNode.dataset.id
        arr2.splice(id, 1)
        for (let i = 0; i < arr3.length; i++) {
            if (arr3[i].father == id) {
                arr3.splice(i, 1)
                i--
            }
        }
        console.log(arr1)
        console.log(arr2)
        console.log(arr3)
        storage()
        // focusedEle = undefined
        // focusedFa = undefined
        console.log(focusedEle, focusedFa)
        cateRender()
        // childCateRender()
        setTimeout(function () {
            childCateRender()
        },10)
        taskRender()
    }
    setTimeout(function () {
        eleFocus()

    },10)
}


var listContent = document.querySelector(".listContent"),
    statusContent = document.querySelector(".statusContent"),
    todoDetail = document.querySelector(".todoDetail"),
    faSelect = document.querySelector(".faSelect"),
    newClassify = document.querySelector(".newClassify"),
    newTask = document.querySelector(".newTask"),
    mask = document.querySelector(".mask"),
    quit = document.querySelector(".quit"),
    delClaBtnList = document.querySelectorAll(".listContent span"),
    addBtn = document.querySelector(".addBtn"),
    newListName = document.querySelector("#newListName"),
    faNode = document.querySelector("#faNode")
// data 和 arr 在下面弄混了，修改起来比较麻烦，一起定义吧
var data1, data2, data3, arr1, arr2, arr3
// 这是指定当前被选中的分类列表
var focusedEle, focusedFa


if (!localStorage.getItem('todoCate')) {
    moren()
}
init()
cateRender()
childCateRender()
taskRender(0)
maskRender()
// 为新增分类添加点击出现弹出框功能
newClassify.onclick = function () {
    mask.style.display = 'block'
    // mask.style.
    addBtn.onclick = function (e) {
        console.log(newListName.value)
        console.log(faNode.value)
        console.log(e.target)
        console.log(faNode)
        if (!faNode.value) {
            arr1.push({
                name: newListName.value,
                id: arr1[arr1.length - 1].id + 1,
                child: []
            })
        } else {
            arr1[~~faNode.value].child.push(arr2[arr2.length - 1].id + 1)
            arr2.push({
                father: ~~faNode.value,
                name: newListName.value,
                id: arr2[arr2.length - 1].id + 1,
                child: []
            })
        }
        storage()
        cateRender()
        maskRender()
        document.querySelector(".creatBtn").innerHTML = `
        <div class="saveBtn" onclick="creatSave(${document.querySelector(".selected").nextSibling.dataset.id})">保存</div>
                    <div class="cancelBtn" onclick="taskRender()">取消</div>
        `
        // var target = e.target
    }
}
// 为弹出框的关闭窗口按钮加上关闭弹出框功能
quit.onclick = function () {
    mask.style.display = "none"
}



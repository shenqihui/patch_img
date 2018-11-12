import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>编辑器</h1>
      <div>
      	<btn>新建画布</btn>
      	<btn>文本(字体大小，颜色，背景，布局)</btn>
      	<btn>图片(背景方式显示图片，图片大小，布局位置)</btn>
      	<btn>框(背景色，边框)</btn>
      </div>
      <div>
      	实际画布容器（点击元素会弹窗，能拖动）
      </div>
      <div>
      	层级显示（能拖动，能合并分组，右键能新建组）
      </div>
      <div>
      	元素弹窗（根据不同类型，填写不同的弹窗）
      </div>
    </div>
  );
}

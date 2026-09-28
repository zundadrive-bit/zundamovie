const MyReact_Effect = (function(){
  let state;
  let _Component = null;

  return {
    render(Component) {
      _Component = Component;
      const ui = _Component();
      return ui;
    },
    useState(initialValue) {
      if (state === undefined) 
      state = initialValue;

      const setState = (newValue) => {
        //現在のstateと新しいstateと同じ値・参照なら、何もせずに処理を終了する。
        if(Object.is(state, newValue)){
          return;
        }
        // 値が違う場合のみ更新して再レンダリング
        state = newValue;
        MyReact_Effect.render(_Component);
      };
      return [state, setState];
    },
   
  };
})();
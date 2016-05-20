'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);var _lib=require('../../lib');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var DOMINANT_COLOR='#FFC533';var demoStyle={'.react-demo a:link, .react-demo a:visited':{color:DOMINANT_COLOR},'.react-demo .syntaxhighlighter .keyword':{color:DOMINANT_COLOR+' !important'}};var Demo=_react2.default.createClass({displayName:'Demo',render:function render(){var imgs=['./img/sample1.png','./img/sample2.png','./img/sample3.png','./img/sample4.png','./img/sample5.png'];return _react2.default.createElement('div',null,_react2.default.createElement(_lib.SgThemeStyle,{dominant:DOMINANT_COLOR,style:demoStyle}),_react2.default.createElement('fieldset',null,_react2.default.createElement('legend',null,'SgButton'),_react2.default.createElement(_lib.SgButton,{primary:true,onTap:function onTap(){return console.log('button 01 tapped!')}},'Button 01'),_react2.default.createElement(_lib.SgButton,{onTap:function onTap(){return console.log('button 02 tapped!')}},'Button 02')),_react2.default.createElement('fieldset',null,_react2.default.createElement('legend',null,'SgAlbum'),_react2.default.createElement(_lib.SgAlbum,{imageList:imgs,width:400,thumbnailCol:4,thumbnailSelectedColor:DOMINANT_COLOR})),_react2.default.createElement('fieldset',null,_react2.default.createElement('legend',null,'SgKinectFrame'),_react2.default.createElement('div',null,_react2.default.createElement(_lib.SgKinectFrame,{style:{display:'inline-block'},width:256,height:128,bodies:require('./data/mock-kinnect-bodies')}),_react2.default.createElement(_lib.SgKinectFrame,{style:{display:'inline-block'},width:256,height:128,bodies:null}))))}});exports.default=Demo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhLHlEQUVBLDRCLDJDQUNBLDhCLGtGQVFBLElBQU0sZUFBaUIsU0FBdkIsQ0FFQSxJQUFNLFVBQVksQ0FDaEIsNENBQTZDLENBQzNDLE1BQU8sY0FEb0MsQ0FEN0IsQ0FJaEIsMENBQTJDLENBQ3pDLE1BQVUsY0FBVixjQUR5QyxDQUozQixDQUFsQixDQVNBLElBQU0sS0FBTyxnQkFBTSxXQUFOLENBQWtCLG9CQUM3QixNQUQ2QixrQkFDbkIsQ0FDUixJQUFJLEtBQU8sQ0FBQyxtQkFBRCxDQUFzQixtQkFBdEIsQ0FBMkMsbUJBQTNDLENBQWdFLG1CQUFoRSxDQUFxRixtQkFBckYsQ0FBWCxDQUNBLE9BQ0UseUNBQ0UsaURBQWMsU0FBVyxjQUF6QixDQUEwQyxNQUFRLFNBQWxELEVBREYsQ0FFRSw4Q0FDRSx1REFERixDQUVFLDZDQUFVLFFBQVUsSUFBcEIsQ0FBMkIsTUFBUSx3QkFBTSxRQUFRLEdBQVIsQ0FBWSxtQkFBWixDQUFOLENBQW5DLGNBRkYsQ0FHRSw2Q0FBVSxNQUFRLHdCQUFNLFFBQVEsR0FBUixDQUFZLG1CQUFaLENBQU4sQ0FBbEIsY0FIRixDQUZGLENBT0UsOENBQ0Usc0RBREYsQ0FFRSw0Q0FBUyxVQUFZLElBQXJCLENBQTRCLE1BQVEsR0FBcEMsQ0FBMEMsYUFBZSxDQUF6RCxDQUE2RCx1QkFBeUIsY0FBdEYsRUFGRixDQVBGLENBV0UsOENBQ0UsNERBREYsQ0FFRSx5Q0FDRSxrREFBZSxNQUFPLENBQUUsUUFBUyxjQUFYLENBQXRCLENBQW1ELE1BQVEsR0FBM0QsQ0FBaUUsT0FBUyxHQUExRSxDQUFnRixPQUFTLFFBQVEsNEJBQVIsQ0FBekYsRUFERixDQUVFLGtEQUFlLE1BQU8sQ0FBRSxRQUFTLGNBQVgsQ0FBdEIsQ0FBbUQsTUFBUSxHQUEzRCxDQUFpRSxPQUFTLEdBQTFFLENBQWdGLE9BQVMsSUFBekYsRUFGRixDQUZGLENBWEYsQ0FERixBQXFCRCxDQXhCNEIsQ0FBbEIsQ0FBYixDLGdCQTJCZSxJIiwiZmlsZSI6ImRlbW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9va3VuaXNoaW5pc2hpL1Byb2plY3RzL3JlYWxnbG9iZS1wcm9qZWN0cy9zZy1yZWFjdC1jb21wb25lbnRzL2RvYy9kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFNnQWxidW0sXG4gIFNnSHRtbCxcbiAgU2dCdXR0b24sXG4gIFNnVGhlbWVTdHlsZSxcbiAgU2dLaW5lY3RGcmFtZVxufSBmcm9tICcuLi8uLi9saWInXG5cbmNvbnN0IERPTUlOQU5UX0NPTE9SID0gJyNGRkM1MzMnXG5cbmNvbnN0IGRlbW9TdHlsZSA9IHtcbiAgJy5yZWFjdC1kZW1vIGE6bGluaywgLnJlYWN0LWRlbW8gYTp2aXNpdGVkJzoge1xuICAgIGNvbG9yOiBET01JTkFOVF9DT0xPUlxuICB9LFxuICAnLnJlYWN0LWRlbW8gLnN5bnRheGhpZ2hsaWdodGVyIC5rZXl3b3JkJzoge1xuICAgIGNvbG9yOiBgJHtET01JTkFOVF9DT0xPUn0gIWltcG9ydGFudGBcbiAgfVxufVxuXG5jb25zdCBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIgKCkge1xuICAgIGxldCBpbWdzID0gWycuL2ltZy9zYW1wbGUxLnBuZycsICcuL2ltZy9zYW1wbGUyLnBuZycsICcuL2ltZy9zYW1wbGUzLnBuZycsICcuL2ltZy9zYW1wbGU0LnBuZycsICcuL2ltZy9zYW1wbGU1LnBuZyddXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZ1RoZW1lU3R5bGUgZG9taW5hbnQ9eyBET01JTkFOVF9DT0xPUiB9IHN0eWxlPXsgZGVtb1N0eWxlIH0vPlxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZD5TZ0J1dHRvbjwvbGVnZW5kPlxuICAgICAgICAgIDxTZ0J1dHRvbiBwcmltYXJ5PXsgdHJ1ZSB9IG9uVGFwPXsgKCkgPT4gY29uc29sZS5sb2coJ2J1dHRvbiAwMSB0YXBwZWQhJykgfT5CdXR0b24gMDE8L1NnQnV0dG9uPlxuICAgICAgICAgIDxTZ0J1dHRvbiBvblRhcD17ICgpID0+IGNvbnNvbGUubG9nKCdidXR0b24gMDIgdGFwcGVkIScpIH0+QnV0dG9uIDAyPC9TZ0J1dHRvbj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsZWdlbmQ+U2dBbGJ1bTwvbGVnZW5kPlxuICAgICAgICAgIDxTZ0FsYnVtIGltYWdlTGlzdD17IGltZ3MgfSB3aWR0aD17IDQwMCB9IHRodW1ibmFpbENvbD17IDQgfSB0aHVtYm5haWxTZWxlY3RlZENvbG9yPXsgRE9NSU5BTlRfQ09MT1IgfS8+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kPlNnS2luZWN0RnJhbWU8L2xlZ2VuZD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNnS2luZWN0RnJhbWUgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gd2lkdGg9eyAyNTYgfSBoZWlnaHQ9eyAxMjggfSBib2RpZXM9eyByZXF1aXJlKCcuL2RhdGEvbW9jay1raW5uZWN0LWJvZGllcycpIH0vPlxuICAgICAgICAgICAgPFNnS2luZWN0RnJhbWUgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gd2lkdGg9eyAyNTYgfSBoZWlnaHQ9eyAxMjggfSBib2RpZXM9eyBudWxsIH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vXG4iXX0=
import * as React from 'react'
import { useEffect } from 'react'
import TabCore from 'tab-core'
import 'tab-core/main.css'

const Index:React.FC<{}> = ()=>{

  useEffect(() => {
    debugger
    var tab = new TabCore.ContentTab({contentClassName:['tabs-content','mission-years'],initIndex:2})
    tab.init()
    tab.initSlider()
    // years
    var tab1 = new TabCore.ContentTab({id:'years',contentClassName:'months-content'})
    tab1.init()
    tab1.bandYearsListener('yearsContent')

   var dialog = new TabCore.ShowMoreDialog({bandId:'yearsContent',bandDialogClass:'item'})
   dialog.init()
   
  }, [])
  return (
    <>
     <main className="content">
    <div className="sliderBlock"  id="slider"></div>
    <div className="nave" id="nav">
      <span >初心使命</span>
      <span className="selected">企业宗旨</span>
      <span>企业定位</span>
      <span>组织架构</span>
      <span>股东介绍</span>
    </div>
    <div className="tabs-content"  >
      <div className="doc-content">
        为全面贯彻落实“四个革命、一个合作”国家能源安全新战略，深化煤炭领域供给侧结构改革，加快构建市场机制有效、微观主体有活力、宏观调控有度的煤炭交易市场体系，推动实现煤炭流通领域治理体系和治理能力现代化，充分发挥市场在资源配置中的决定性作用，按照国务院有关文件精神，2018年6月国家发展改革委就组建全国煤炭交易中心向国务院呈报专题报告并获同意。在国家发展改革委推动下，国家铁路集团联合煤炭、电力、钢铁、港口、地方煤炭交易中心等35家骨干企业发起设立全国煤炭交易中心有限公司，打造国家级煤炭交易平台。
      </div>
      
    </div>
    <div className="tabs-content" style={{display: 'block'}}>
      <div className="doc-content">
        222为全面贯彻落实“四个革命、一个合作”国家能源安全新战略，深化煤炭领域供给侧结构改革，加快构建市场机制有效、微观主体有活力、宏观调控有度的煤炭交易市场体系，推动实现煤炭流通领域治理体系和治理能力现代化，充分发挥市场在资源配置中的决定性作用，按照国务院有关文件精神，2018年6月国家发展改革委就组建全国煤炭交易中心向国务院呈报专题报告并获同意。在国家发展改革委推动下，国家铁路集团联合煤炭、电力、钢铁、港口、地方煤炭交易中心等35家骨干企业发起设立全国煤炭交易中心有限公司，打造国家级煤炭交易平台。
      </div>
      
    </div>
   
  </main>
  <div className="mission-years" id="yearsContent" style={{display: 'none'}}>
    <div className="years-title">
      <span id="arrow-left" className="iconfont icon-left noused"></span>
      <div className="years" id="years">
        <div className="selected">2021<span className="year">年</span></div>
        <div >2022<span className="year">年</span></div>
        <div >2023<span className="year">年</span></div>
        <div >2024<span className="year">年</span></div>
        <div >2025<span className="year">年</span></div>
        <div >2026<span className="year">年</span></div>
        <div >2027<span className="year">年</span></div>
        <div >2028<span className="year">年</span></div>
        <div >2029<span className="year">年</span></div>
      </div>
      <span id="arrow-right" className="iconfont icon-left right"></span>
    </div>
    <div className="months-content" style={{display: 'block'}}>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里1；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里2；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里3；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里4；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>7月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>6月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
    </div>


    <div className="months-content">
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>7月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>6月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
    </div>


    <div className="months-content">
      <div className="month-content">
        <div className="month"><span>12月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
     
    </div>

    <div className="months-content">
      <div className="month-content">
        <div className="month"><span>10月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
      <div className="month-content">
        <div className="month"><span>9月</span></div>
        <div className="month-content-items">
          <div className="item">
            案例阿里；的李开复埃里克森都发老生代空间发牢骚；打飞机；拉四大皆空
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Index;
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';
import {Circle, geometry, Group, Path} from '@progress/kendo-drawing';
import {SeriesVisualArgs} from "@progress/kendo-react-all";
import styles from './graph.module.scss'


export const Graph = () => {
  const {Circle: GeomCircle} = geometry;


  const categories = ["29.01", "29.02", "29.03", "29.04", "29.05", "29.06", "29.07", "29.08", "29.09", "29.10", "29.11", "29.12"];

  const mySeriesVisual = (e: SeriesVisualArgs) => {
    const width = 20;
    const radius = width / 2;
    const height = e.rect.size.height;
    const originY = e.rect.origin.y;
    const originX = e.rect.origin.x;
    const pointX = originX;
    const pointY = originY;

    const geometry = new GeomCircle([pointX + radius, pointY], radius);

    const circle = new Circle(geometry, {
      stroke: {color: e.series.color, width: 1},
      fill: {color: e.series.color},
    });

    const path = new Path({
      stroke: {color: e.series.color, width: 1},
      fill: {color: e.series.color},
    });
    path
      .moveTo(pointX, originY)
      .lineTo(originX + width, originY)
      .lineTo(originX + width, originY + height)
      .lineTo(pointX, originY + height)
      .close();

    const group = new Group();
    group.append(circle, path);
    return group;
  };


  const series = [
    {
      name: 'India1',
      data: [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19],
      color: '#92d3c4',
      visual: mySeriesVisual
    },
    {
      name: 'India',
      data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      color: '#03d99f',
      visual: mySeriesVisual
    },
  ];

  const getItemClasses = (idx: number, classes: string, opacity: string): string => {
    return idx !== 0 ? classes + ' ' + opacity : classes
  }



  return <>
    <Chart>
      <ChartLegend position="top" orientation="horizontal"/>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} startAngle={45}/>
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="column"
            color={item.color}
            data={item.data}
            visual={item.visual}
            stack={true}
            gap={3.5}
            spacing={30}
          />
        ))}
      </ChartSeries>
    </Chart>
    <div className={styles.statistics}>

      <div className={styles.statistics__loan_body}>
        {new Array(12).fill(2).map((_, idx) => (
          <div key={idx} className={getItemClasses(idx, styles.statistics__loan_body__item, styles.opacity)}>
            <span className={styles.square}></span>
            <div className={styles.statistics__loan_body__item_text}>
              <span className={styles.loan_body}>Тело кредита</span>
              <span className={styles.price}>1600c</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.statistics__remaining_credit}>
        {new Array(12).fill(2).map((_, idx) => (
          <div key={idx} className={getItemClasses(idx, styles.statistics__remaining_credit_item, styles.opacity)}>
            <span className={styles.square}></span>
            <div className={styles.statistics__remaining_credit_item_text}>
              <span className={styles.remain}>Остаток</span>
              <span className={styles.price}>2400c</span>
            </div>
          </div>
        ))}

      </div>

      <div className={styles.statistics__interest_rate}>
        {new Array(12).fill(2).map((_, idx) => (
          <div key={idx} className={getItemClasses(idx, styles.statistics__interest_rate_item, styles.opacity)}>
            <span className={styles.interest_rate}>Проц. ставка</span>
            <span className={styles.percent}>50%</span>
          </div>
        ))}
      </div>

    </div>
  </>
}


export interface SoftwareCopyright {
  id: string;
  version: string;
  name: string;
  registrationNo: string;
  certificateNo: string;
  imageUrl?: string;
}

export const SORTED_SOFTWARE_COPYRIGHTS: SoftwareCopyright[] = [
  {
    id: '1',
    version: 'V1.0',
    name: 'CervixDetectAI 宫颈影像智能辅助筛查系统',
    registrationNo: '2025SR1234567',
    certificateNo: '软著登字第12345678号',
  },
  {
    id: '2',
    version: 'V1.0',
    name: 'CervixDetectAI 结构化报告生成系统',
    registrationNo: '2025SR1234568',
    certificateNo: '软著登字第12345679号',
  },
  {
    id: '3',
    version: 'V1.0',
    name: 'CervixDetectAI 随访管理协同系统',
    registrationNo: '2025SR1234569',
    certificateNo: '软著登字第12345680号',
  },
];

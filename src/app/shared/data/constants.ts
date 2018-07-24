export const Constants = {

    LINES: ['ALL', 'ML0', 'ML1', 'ML2', 'BUS', 'TVL', 'QUAL', 'LOG'],
    FUNCTION_AREAS: ['ALL', 'FA0', 'FA1.1', 'FA1.2', 'FA2', 'FA3.1', 'FA3.2', 'FA4', 'FA5', 'FA6', 'MO1', 'MO2', 'MO3', 'MO4', 'N.A'],
    STATIONS: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'PM', 'N.A'],
    POSITIONS: [0, 1, 2, 3, 4, 5, 6],
    TYPES: ['ALL', 'PY', 'LTS', 'LBS', 'AGV', 'TORQUE', 'APERT', 'SUP. PY', 'SUP. LTS', 'SUP. LBS', 'SUP. AGV', 'SUP. TORQUE'],
    REQUEST_STATUS: ['N.A', 'DRAFT', 'EM APROVAÇÃO', 'APROVADO', 'ATENDIDA', 'PENDENTE', 'CANCELADA'],
    STATUS: ['ALL', 'NOT STARTED', 'ON GOING', 'STOPPED', 'COMPLETED'],
    INPUTS: ['ALL', 'TQC', 'BQC', 'PROD', 'NTG', 'ECO', 'QAS', 'BRIEFING', 'TAKT RED', 'MANUT', 'VDT', 'AUDIT'],
    NCG: ['OK', 'REWORK', 'STUDY', 'NOT VALID'],
    MACHINE_TYPES: ['PNEUMATIC', 'ELETRONIC', 'ELETRIC', 'HIDRO', 'TORQUIM'],
    PHASES_NAMES: ['AD', 'SOL. ANALYSES', 'AD APPROVAL', 'TECH EVAL',
        'DRAWING', 'REQ. ESPEC', 'RS/OS APPROVAL', 'RFQ APPROVAL', 'TECH LEVELING',
        'QUOTATION', 'SUP COMPARASION', 'AWARD PROPOSAL', 'ORDER APPENDIX',
        'KICK OFF', 'PROJ. DEVELOP', 'PROJ. APPROVAL', 'CONSTRUCTION',
        'SUP. TRYOUT', 'INSTALLATION', 'PROD TRYOUT', 'PROD APPROVAL'
    ],
    PHASES: [
        { name: 'AD', percentage: 0 }, { name: 'SOL. ANALYSES', percentage: 5 }, { name: 'AD APPROVAL', percentage: 10 },
        { name: 'TECH EVAL', percentage: 15 }, { name: 'DRAWING', percentage: 20 }, { name: 'REQ. ESPEC', percentage: 25 },
        { name: 'RS/OS APPROVAL', percentage: 30 }, { name: 'RFQ APPROVAL', percentage: 35 }, { name: 'TECH LEVELING', percentage: 40 },
        { name: 'QUOTATION', percentage: 45 }, { name: 'SUP COMPARASION', percentage: 50 }, { name: 'AWARD PROPOSAL', percentage: 55 },
        { name: 'ORDER APPENDIX', percentage: 60 }, { name: 'KICK OFF', percentage: 65 }, { name: 'PROJ. DEVELOP', percentage: 70 },
        { name: 'PROJ. APPROVAL', percentage: 75 }, { name: 'CONSTRUCTION', percentage: 80 }, { name: 'SUP. TRYOUT', percentage: 85 },
        { name: 'INSTALLATION', percentage: 90 }, { name: 'PROD TRYOUT', percentage: 95 }, { name: 'PROD APPROVAL', percentage: 100 }
    ],

    RESPONSIBLES: ['SSBDOO', 'SSBDRA', 'SSBEXD', 'SSBFCI', 'SSBFCS', 'SSBFPP', 'SSBGOD',
        'SSBHAL', 'SSBHLA', 'SSBHMR', 'SSBHPE', 'SSBIOD', 'SSBIGP', 'SSBJGC', 'SSBJII',
        'SSBJUA', 'SSBLED', 'SSBNGG', 'SSBODR', 'SSBROX', 'SSBRSW', 'SSBSFR', 'SSBUCD',
        'SSBUIF', 'SSBVES', 'SSBWAI', 'SSBWEL'
    ],


    VDT_TYPES: ['VDT', 'AUDIT']

};

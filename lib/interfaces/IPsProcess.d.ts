/**
 * Represents a single running process
 *
 * @export
 * @interface IPsProcess
 */
/**
 * Represents a single running process
 *
 * @export
 * @interface IPsProcess
 */
export declare type IPsProcess = {
    [index in FormatSpecifierHeader]?: any;
};
export interface IFormatSpecifier {
    code: FormatSpecifierCode;
    header: FormatSpecifierHeader;
}
export declare type FormatSpecifierCode = "%cpu" | "%mem" | "args" | "blocked" | "bsdstart" | "bsdtime" | "c" | "caught" | "cgname" | "cgroup" | "class" | "cls" | "cmd" | "comm" | "command" | "cp" | "cputime" | "drs" | "egid" | "egroup" | "eip" | "esp" | "etime" | "etimes" | "euid" | "euser" | "f" | "fgid" | "fgroup" | "flag" | "flags" | "fname" | "fuid" | "fuser" | "gid" | "group" | "ignored" | "ipcns" | "label" | "lstart" | "lsession" | "lwp" | "lxc" | "machine" | "maj_flt" | "min_flt" | "mntns" | "netns" | "ni" | "nice" | "nlwp" | "nwchan" | "ouid" | "pcpu" | "pending" | "pgrp" | "pid" | "pidns" | "pmem" | "policy" | "ppid" | "pri" | "psr" | "rgid" | "rgroup" | "rss" | "rssize" | "rsz" | "rtprio" | "ruid" | "ruser" | "s" | "sched" | "seat" | "sess" | "sgi_p" | "sgid" | "sgroup" | "sid" | "sig" | "sigcatch" | "sigignore" | "sigmask" | "size" | "slice" | "spid" | "stackp" | "start" | "start_time" | "stat" | "state" | "suid" | "supgid" | "supgrp" | "suser" | "svgid" | "svuid" | "sz" | "tgid" | "thcount" | "tid" | "time" | "tname" | "tpgid" | "trs" | "tt" | "tty" | "ucmd" | "ucomm" | "uid" | "uname" | "unit" | "user" | "userns" | "utsns" | "uunit" | "vsize" | "vsz" | "wchan";
export declare type FormatSpecifierHeader = "%CPU" | "%MEM" | "COMMAND" | "BLOCKED" | "START" | "TIME" | "C" | "CAUGHT" | "CGNAME" | "CGROUP" | "CLS" | "CLS" | "CMD" | "COMMAND" | "COMMAND" | "CP" | "TIME" | "DRS" | "EGID" | "EGROUP" | "EIP" | "ESP" | "ELAPSED" | "ELAPSED" | "EUID" | "EUSER" | "F" | "FGID" | "FGROUP" | "F" | "F" | "COMMAND" | "FUID" | "FUSER" | "GID" | "GROUP" | "IGNORED" | "IPCNS" | "LABEL" | "STARTED" | "SESSION" | "LWP" | "LXC" | "MACHINE" | "MAJFLT" | "MINFLT" | "MNTNS" | "NETNS" | "NI" | "NI" | "NLWP" | "WCHAN" | "OWNER" | "%CPU" | "PENDING" | "PGRP" | "PID" | "PIDNS" | "%MEM" | "POL" | "PPID" | "PRI" | "PSR" | "RGID" | "RGROUP" | "RSS" | "RSS" | "RSZ" | "RTPRIO" | "RUID" | "RUSER" | "S" | "SCH" | "SEAT" | "SESS" | "P" | "SGID" | "SGROUP" | "SID" | "PENDING" | "CAUGHT" | "IGNORED" | "BLOCKED" | "SIZE" | "SLICE" | "SPID" | "STACKP" | "STARTED" | "START" | "STAT" | "S" | "SUID" | "SUPGID" | "SUPGRP" | "SUSER" | "SVGID" | "SVUID" | "SZ" | "TGID" | "THCNT" | "TID" | "TIME" | "TTY" | "TPGID" | "TRS" | "TT" | "TT" | "CMD" | "COMMAND" | "UID" | "USER" | "UNIT" | "USER" | "USERNS" | "UTSNS" | "UUNIT" | "VSZ" | "VSZ" | "WCHAN";
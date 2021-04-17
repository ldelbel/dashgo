import { Stack } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Users</NavLink>
      </NavSection>
      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine} href="/forms">Forms</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">Automation</NavLink>
      </NavSection>
    </Stack>
  );
}

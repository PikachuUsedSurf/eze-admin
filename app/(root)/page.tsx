"use client";

import { Modal } from "@/components/ui/modal";

  
const SetupPage = () => {
    return (
        <div>
            <Modal title="Setup" description="Setup your account" isOpen={true} onClose={() => {}}>
                children
            </Modal>
        </div>
    )
}

export default SetupPage;